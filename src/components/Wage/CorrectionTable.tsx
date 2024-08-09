import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/constants/colors';
import ApprovedStatusBadge from './ApprovedStatusBadge';
import { useNavigate } from 'react-router-dom';
import getCorrection from '@/api/work/getCorrection';
import { getApprovedStatusLabel, getWorkTypeLabel } from '@/utils/labelUtils';
import Button from '../common/Button/Button';
import { fontSize } from '@/constants/font';

type TApproveStatus = 'pending' | 'approved' | 'rejected';
type TType = 'cover' | 'special' | 'vacation' | 'early';
type TWorkingTimes = 'open' | 'middle' | 'close';

interface ICorrectionItem {
	approveStatus: TApproveStatus | string;
	description: string;
	reqDate: string;
	type: TType | string;
	workDate: string;
	workingTimes: TWorkingTimes | string;
}

interface ICorrectionTableProps {
	approvedFilter?: string;
	typeFilter?: string;
}

export const CorrectionTable = ({ approvedFilter, typeFilter }: ICorrectionTableProps) => {
	const columns = ['요청날짜', '근무정정 유형', '승인상태'];
	const [corrections, setCorrections] = useState<ICorrectionItem[]>([]);
	const [visibleItems, setVisibleItems] = useState(10);
	const navigate = useNavigate();

	const handleCorrection = (index: number) => () => {
		navigate(`/wage/correction/${index}`);
	};

	const formatDate = (dateStr: string): string => {
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-CA');
	};

	const fetchCorrection = async () => {
		const data = await getCorrection();
		const filteredCorrections = data.workCorrections
			.filter((correction) => {
				return (
					(!approvedFilter ||
						getApprovedStatusLabel(correction.approveStatus) === approvedFilter) &&
					(!typeFilter || getWorkTypeLabel(correction.type) === typeFilter)
				);
			})
			.map((correction: ICorrectionItem) => ({
				...correction,
				reqDate: formatDate(correction.reqDate),
				workDate: formatDate(correction.workDate),
			}))
			.sort((a, b) => new Date(b.reqDate).getTime() - new Date(a.reqDate).getTime());

		setCorrections(filteredCorrections);
	};

	const handleLoadMore = () => {
		setVisibleItems((prev) => prev + 5);
	};

	useEffect(() => {
		fetchCorrection();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [approvedFilter, typeFilter]);
	return (
		<TableContainer>
			<thead>
				<tr>
					{columns.map((column) => (
						<th key={column}>{column}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{corrections.length === 0 ? (
					<tr>
						<td className="no-data" colSpan={3} style={{ textAlign: 'center' }}>
							데이터가 없습니다.
						</td>
					</tr>
				) : (
					corrections.slice(0, visibleItems).map((correction, index) => {
						const workLabel = getWorkTypeLabel(correction.type);
						return (
							<tr key={index} onClick={handleCorrection(index + 1)}>
								<td>{correction.reqDate}</td>
								<td>{workLabel}</td>
								<td>
									<ApprovedStatusBadge
										approvedStatus={correction.approveStatus}
									/>
								</td>
							</tr>
						);
					})
				)}
			</tbody>

			{visibleItems < corrections.length && (
				<tfoot>
					<tr>
						<td colSpan={3}>
							<Button
								label="더보기"
								onClick={handleLoadMore}
								size="normal"
								theme="secondary"
								buttonWidth="calc(100% - 40px)"
							/>
						</td>
					</tr>
				</tfoot>
			)}
		</TableContainer>
	);
};

export default CorrectionTable;

const TableContainer = styled.table`
	width: 100%;
	margin-bottom: 80px;

	thead {
		height: 60px;
		background-color: ${colors.lightestGray};
		border-top: 1px solid ${colors.lightGray};
		border-bottom: 1px solid ${colors.lightGray};
		th {
			width: calc(100% / 3);
		}
	}
	tbody {
		td {
			width: calc(100% / 3);
			height: 60px;
			text-align: center;
			cursor: pointer;
		}
		.no-data {
			padding-top: 100px;
			font-size: ${fontSize.lg};
		}
	}

	tfoot {
		text-align: center;
		button {
			margin-top: 10px;
		}
	}
`;

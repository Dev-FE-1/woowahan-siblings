import getOfficialWage from '@/api/work/getOfficialWage';
import Button from '@/components/common/Button/Button';
import { colors } from '@/constants/colors';
import { fontSize } from '@/constants/font';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Title from '../common/Title';

const formatDate = (dateString: string) => {
	const [, month, day] = dateString.split('-').map(Number);
	return `${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;
};

const formatWorkingTimes = (workingTimes: string | string[]) => {
	const workingTime = Array.isArray(workingTimes) ? workingTimes[0] : workingTimes;
	switch (workingTime) {
		case 'open':
			return '오픈(07:00~12:00) | 휴게 30분';
		case 'middle':
			return '미들(12:00~17:00) | 휴게 30분';
		case 'close':
			return '마감(17:00~22:00) | 휴게 30분';
		default:
			return workingTime;
	}
};

interface IWorkHistoryProps {
	year: number;
	month: number;
	onClick: (item: IOfficialWageItem) => void;
}

export interface IOfficialWageItem {
	date: string;
	workingTimes: string | string[];
	isSub: boolean;
}

const WorkHistory = ({ year, month, onClick }: IWorkHistoryProps) => {
	const [visibleItems, setVisibleItems] = useState(8);
	const [officialWage, setOfficialWage] = useState<IOfficialWageItem[]>([]);
	const [error, setError] = useState<string | null>(null);

	const fetchOfficialWage = async (year: number, month: number) => {
		try {
			const data = await getOfficialWage(year, month);
			const sortedData = data.officialWage.sort(
				(a, b) =>
					new globalThis.Date(b.date).getTime() - new globalThis.Date(a.date).getTime(),
			);
			setOfficialWage(sortedData);
		} catch (error) {
			setError('Failed to fetch wage data');
		}
	};

	const handleLoadMore = () => {
		setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
	};

	useEffect(() => {
		fetchOfficialWage(year, month);
	}, [year, month]);

	return (
		<Container>
			<Title title="급여 내역" />
			<div className="work-history-container">
				{error ? (
					<div>{error}</div>
				) : (
					<>
						{officialWage.slice(0, visibleItems).map((item, index: number) => (
							<HistoryItem key={index} onClick={() => onClick(item)}>
								<div className="date-details-container">
									<Date>{formatDate(item.date)}</Date>
									<Details>
										<div>강남점</div>
										<span>{formatWorkingTimes(item.workingTimes)}</span>
									</Details>
								</div>
								<Amount>
									{(item.workingTimes.length * 45135).toLocaleString()}원
								</Amount>
							</HistoryItem>
						))}
						{visibleItems < officialWage.length && (
							<Button
								label="더보기"
								onClick={handleLoadMore}
								size="normal"
								theme="secondary"
								buttonWidth="100%"
							/>
						)}
					</>
				)}
			</div>
		</Container>
	);
};

const Container = styled.div`
	margin-bottom: 96px;

	.work-history-container {
		padding: 0 20px;
		margin-top: 23px;
	}
`;

const HistoryItem = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 36px;
	cursor: pointer;

	span {
		font-size: ${fontSize.sm};
		color: ${colors.gray};
	}

	.date-details-container {
		display: flex;
	}
`;

const Date = styled.div`
	color: ${colors.gray};
	width: 60px;
	flex: 1;
`;

const Details = styled.div`
	margin-left: 5px;
	flex: 3;
`;

const Amount = styled.div`
	text-align: end;
	flex: 1;
`;

export default WorkHistory;

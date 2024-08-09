import Title from '@/components/common/Title';
import { colors } from '@/constants/colors';
import { fontSize, fontWeight } from '@/constants/font';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

const WageCheckDetail = () => {
	const location = useLocation();
	const { item } = location.state || {};

	if (!item) {
		return <Container>잘못된 접근입니다.</Container>;
	}

	const formatDate = (timestamp: string) => {
		const date = new Date(timestamp);
		return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
	};

	const extractWorkingTimes = (workingTimes: string | string[]) => {
		const time = Array.isArray(workingTimes)
			? workingTimes[0].split('|')[0].trim()
			: workingTimes.split('|')[0].trim();
		switch (time) {
			case 'open':
				return '오픈';
			case 'middle':
				return '미들';
			case 'close':
				return '마감';
			default:
				return time;
		}
	};

	return (
		<Container>
			<Title title="급여 상세 내역" className="title" />
			<div className="header-wrapper">
				<h3 className="work-place">강남점</h3>
				<h4 className="day-wage">
					{(item.workingTimes.length * 45135).toLocaleString()}원
				</h4>
			</div>
			<div className="detail-wrapper">
				<div className="detail-row">
					<p className="detail-key">근무일</p>
					<p className="detail-value">{formatDate(item.date)}</p>
				</div>
				<div className="detail-row">
					<p className="detail-key">근무 시간</p>
					<p className="detail-value">{extractWorkingTimes(item.workingTimes)}</p>
				</div>
				<div className="detail-row">
					<p className="detail-key">휴게 시간</p>
					<p className="detail-value">30분</p>
				</div>
				<div className="detail-row">
					<p className="detail-key">시급</p>
					<p className="detail-value">{(10030).toLocaleString()}원</p>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	.title {
		padding-top: 20px;
	}
	.header-wrapper {
		padding: 20px 20px 50px;
		margin-top: 38px;
		border-bottom: 1px solid ${colors.lightGray};
		.work-place {
			margin-bottom: 5px;
			font-size: ${fontSize.lg};
			font-weight: ${fontWeight.regular};
		}
		.day-wage {
			font-size: ${fontSize.xxxl};
			font-weight: ${fontWeight.semiBold};
		}
	}

	.detail-wrapper {
		padding: 22px 20px 0;
		.detail-row {
			display: flex;
			justify-content: space-between;
			margin-bottom: 22px;

			/* .detail-key {
				font-size: ${fontSize.lg};
			}

			.detail-value {
				text-align: right;
				font-weight: bold;
				font-size: ${fontSize.lg};
			} */
		}
	}
`;

export default WageCheckDetail;

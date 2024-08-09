import { fontSize, fontWeight } from '@/constants/font';
import styled from '@emotion/styled';

interface ISalaryCardProps {
	title: string;
	wagecount: number;
	workinghours: number;
	iconSrc?: string;
}

const SalaryCard = ({ title, wagecount, workinghours, iconSrc }: ISalaryCardProps) => {
	return (
		<Card>
			<div className="text-container">
				<Title>{title}</Title>
				<WageCount>{wagecount.toLocaleString()}원</WageCount>
				<WorkingHours>근무시간 | {workinghours}시간</WorkingHours>
			</div>
			<IconContainer>{iconSrc && <img src={iconSrc} alt="icon" />}</IconContainer>
		</Card>
	);
};

const Card = styled.div`
	background-color: #ffc700;
	border-radius: 10px;
	padding: 20px;
	height: 140px;
	display: flex;
	justify-content: space-between;
	color: white;

	.text-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	@media (min-width: 400px) {
		height: 150px;
	}
`;

const Title = styled.div`
	font-weight: ${fontWeight.bold};
	width: 155px;
`;

const WageCount = styled.div`
	font-size: ${fontSize.xxl};
	font-weight: ${fontWeight.bold};
`;

const WorkingHours = styled.div`
	font-size: ${fontSize.sm};
`;

const IconContainer = styled.div`
	text-align: center;
	width: 102px;
	img {
		height: 100%;
	}

	@media (min-width: 400px) {
		width: 120px;
	}
`;

export default SalaryCard;

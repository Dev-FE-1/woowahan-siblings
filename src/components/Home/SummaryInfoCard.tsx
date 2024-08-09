import { useState, useEffect } from 'react';
import getOfficialWage from '@/api/work/getOfficialWage';
import { colors } from '@/constants/colors';
import { fontSize, fontWeight } from '@/constants/font';
import characterCheese from '@/assets/character_cheese.svg';
import styled from '@emotion/styled';

const SummaryInfoCard = () => {
	const [totalWorkHour, setTotalWorkHour] = useState<number | string>(0);
	const [totalWage, setTotalWage] = useState<number | string>(0);

	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const monthString = month.toString().padStart(2, '0');

	useEffect(() => {
		const fetchWageData = async () => {
			try {
				const { totalWorkHour, totalWage } = await getOfficialWage(year, month);
				setTotalWorkHour(totalWorkHour);
				setTotalWage(totalWage);
			} catch (error) {
				setTotalWorkHour('급여 정보를 불러오는 데 실패했습니다');
				setTotalWage('급여 정보를 불러오는 데 실패했습니다');
			}
		};

		fetchWageData();
	}, [year, month]);

	return (
		<SummaryCard>
			<SummaryCardContainer>
				<FirstSection>
					<p>
						공식 근무 스케줄 | {year}년 {monthString}월
					</p>
					<p>근무 시간 | {totalWorkHour}시간</p>
				</FirstSection>
				<SecondSection>
					<p>예상 급여액</p>
					<p>{totalWage.toLocaleString()}원</p>
				</SecondSection>
			</SummaryCardContainer>
			<img src={characterCheese} alt="치즈캐릭터" />
		</SummaryCard>
	);
};

export default SummaryInfoCard;

const SummaryCard = styled.div`
	margin: 20px 20px 40px;
	padding: 16px;
	height: 150px;
	display: flex;
	justify-content: space-between;
	border-radius: 8px;
	color: ${colors.white};
	background-color: ${colors.primaryYellow};

	img {
		height: 100%;
	}
`;

const SummaryCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/*gap: 24px; */
`;

const FirstSection = styled.div`
	/* display: flex;
	flex-direction: column; */
	font-weight: ${fontWeight.semiBold};
	font-size: ${fontSize.sm};
`;

const SecondSection = styled.div`
	/* display: flex;
	flex-direction: column; */
	font-weight: ${fontWeight.bold};
	/* div:nth-of-type(1) {
		font-size: ${fontSize.md};
	} */
	p:nth-of-type(2) {
		font-size: ${fontSize.xxl};
	}
`;

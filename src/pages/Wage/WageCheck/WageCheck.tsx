import Loading from '@/components/Loading/Loading';
import ControlMonth from '@/components/Wage/ControlMonth';
import SalaryCard from '@/components/Wage/SalaryCard';
import { Suspense, lazy } from 'react';
import characterCheese from '@/assets/character_cheese.svg';
import characterClock from '@/assets/character_clock.svg';
import useWageCheck from '@/hooks/useWageCheck';
import styled from '@emotion/styled';

const WorkHistory = lazy(() => import('@/components/Wage/WorkHistory'));

const WageCheck = () => {
	const {
		year,
		month,
		personalWageData,
		personalWageError,
		officialWageData,
		officialWageError,
		handleMonthChange,
		getErrorMessage,
		handleItemClick,
	} = useWageCheck();

	if (personalWageError || officialWageError) {
		return (
			<div>
				Error:{' '}
				{personalWageError
					? getErrorMessage(personalWageError)
					: getErrorMessage(officialWageError)}
			</div>
		);
	}

	return (
		<>
			<ControlMonth onMonthChange={handleMonthChange} />
			<Suspense fallback={<Loading />}>
				<SalaryCardContainer>
					<SalaryCard
						title="개인근무 일정표에 따른 예상 급여액"
						wagecount={personalWageData?.totalWage || 0}
						workinghours={personalWageData?.totalWorkHour || 0}
						iconSrc={characterClock}
					/>
					<SalaryCard
						title="공식 근무 스케줄에 따른 예상 급여액"
						wagecount={officialWageData?.totalWage || 0}
						workinghours={officialWageData?.totalWorkHour || 0}
						iconSrc={characterCheese}
					/>
				</SalaryCardContainer>
				<WorkHistory year={year} month={month} onClick={handleItemClick} />
			</Suspense>
		</>
	);
};

const SalaryCardContainer = styled.div`
	margin-bottom: 36px;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export default WageCheck;

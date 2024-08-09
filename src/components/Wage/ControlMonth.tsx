import IconButton from '@/components/common/Button/IconButton';
import { fontSize, fontWeight } from '@/constants/font';
import styled from '@emotion/styled';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import getOfficialWage from '@/api/work/getOfficialWage';
import getPersonalWage from '@/api/work/getPersonalWage';

interface IControlMonthProps {
	onMonthChange: (year: number, month: number) => void;
}

const ControlMonth = ({ onMonthChange }: IControlMonthProps) => {
	const [date, setDate] = useState(new Date());
	const [isPreviousDisabled, setIsPreviousDisabled] = useState(false);
	const [isNextDisabled, setIsNextDisabled] = useState(false);

	const handlePreviousMonth = () => {
		setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
	};

	const handleNextMonth = () => {
		setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
	};

	const formatDate = (date: Date) => {
		return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
	};

	const checkMonthData = async (year: number, month: number) => {
		const [personalWage, officialWage] = await Promise.all([
			getPersonalWage(year, month),
			getOfficialWage(year, month),
		]);
		return personalWage.totalWorkHour > 0 || officialWage.totalWorkHour > 0;
	};

	useEffect(() => {
		const checkNavigationButtons = async () => {
			const previousMonth = date.getMonth() === 0 ? 11 : date.getMonth() - 1;
			const previousYear =
				date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear();
			const nextMonth = date.getMonth() === 11 ? 0 : date.getMonth() + 1;
			const nextYear = date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear();

			const [previousDataExists, nextDataExists] = await Promise.all([
				checkMonthData(previousYear, previousMonth + 1),
				checkMonthData(nextYear, nextMonth + 1),
			]);

			setIsPreviousDisabled(!previousDataExists);
			setIsNextDisabled(!nextDataExists);
		};

		checkNavigationButtons();
		onMonthChange(date.getFullYear(), date.getMonth() + 1);
	}, [date, onMonthChange]);

	return (
		<CalendarContainer>
			<IconButton
				IconComponent={ChevronLeft}
				shape="line"
				onClick={handlePreviousMonth}
				disabled={isPreviousDisabled}
			/>
			<MonthDisplay>{formatDate(date)}</MonthDisplay>
			<IconButton
				IconComponent={ChevronRight}
				shape="line"
				onClick={handleNextMonth}
				disabled={isNextDisabled}
			/>
		</CalendarContainer>
	);
};

const CalendarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 24px 20px;
`;
const MonthDisplay = styled.div`
	font-size: ${fontSize.xl};
	font-weight: ${fontWeight.bold};
`;
export default ControlMonth;

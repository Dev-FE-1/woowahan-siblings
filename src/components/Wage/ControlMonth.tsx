/** @jsxImportSource @emotion/react */
import IconButton from '@/components/IconButton';
import styled from '@emotion/styled';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ControlMonth = () => {
	const [date, setDate] = useState(new Date());

	const handlePreviousMonth = () => {
		setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
	};

	const handleNextMonth = () => {
		setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
	};

	const formatDate = (date: Date) => {
		return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
	};

	return (
		<CalendarContainer>
			<IconButton
				IconComponent={ChevronLeft}
				shape="line"
				color="gray"
				size={24}
				onClick={handlePreviousMonth}
			/>
			<MonthDisplay>{formatDate(date)}</MonthDisplay>
			<IconButton
				IconComponent={ChevronRight}
				shape="line"
				color="gray"
				size={24}
				onClick={handleNextMonth}
			/>
		</CalendarContainer>
	);
};

const CalendarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 20px 20px;
`;

const MonthDisplay = styled.div`
	font-size: 24px;
	font-weight: bold;
`;

export default ControlMonth;
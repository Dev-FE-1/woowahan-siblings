import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { colors } from '@/constants/colors';
import { formatDateWithLeadingZeros, getDayType, sortByWorkType } from '@/utils/dateUtils';
import { IScheduleProps } from '@/hooks/useSchedules';
import CalendarBadge from '@/components/common/Calendar/CalendarBadge';
import styled from '@emotion/styled';

interface ICalendarDatesProps {
	date: Timestamp;
	isOfficial: boolean;
	schedules: IScheduleProps[];
	currentMonth: number;
	currentYear: number;
}

const CalendarDates: FC<ICalendarDatesProps> = ({
	date,
	isOfficial,
	schedules,
	currentYear,
	currentMonth,
}) => {
	const navigate = useNavigate();

	const formattedDate = formatDateWithLeadingZeros(date);

	const filteredSchedules = schedules
		.filter((schedule) => schedule.date === formattedDate)
		.sort(sortByWorkType)
		.map((schedule) => ({
			...schedule,
			workingTimes: [...schedule.workingTimes].sort((a, b) => {
				const order = ['open', 'middle', 'close'];
				return order.indexOf(a) - order.indexOf(b);
			}),
		}));

	const handleDateClick = () => {
		if (isCurrentMonth && !isOfficial) {
			const dateString = formatDateWithLeadingZeros(date);
			navigate(`/schedule/${dateString}`);
		}
	};

	const isCurrentMonth =
		date.toDate().getMonth() === currentMonth && date.toDate().getFullYear() === currentYear;

	return (
		<DatesContainer
			isOfficial={isOfficial}
			clickable={isCurrentMonth && !isOfficial}
			onClick={() => {
				handleDateClick();
			}}
		>
			<DayContainer dayType={getDayType(date)} isCurrentMonth={isCurrentMonth}>
				{date.toDate().getDate()}
			</DayContainer>
			{filteredSchedules.map((data) => (
				<DateListContainer key={data.date}>
					{data.workingTimes.map((workingTime, index) => (
						<CalendarBadge
							key={`${data.date}-${workingTime}-${index}`}
							workingTime={workingTime}
						/>
					))}
				</DateListContainer>
			))}
		</DatesContainer>
	);
};

export default CalendarDates;

const DatesContainer = styled.div<{
	isOfficial: boolean;
	clickable: boolean;
}>`
	cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
	${({ clickable }) =>
		clickable &&
		`
        &:hover {
            background-color: ${colors.lightestGray};
        }
    `}
`;

const DayContainer = styled.span<{
	dayType: 'weekday' | 'saturday' | 'sunday';
	isCurrentMonth: boolean;
}>`
	color: ${({ dayType, isCurrentMonth }) => {
		if (!isCurrentMonth) return colors.lightGray;

		switch (dayType) {
			case 'sunday':
				return colors.red;
			case 'saturday':
				return colors.blue;
			default:
				return colors.black;
		}
	}};
`;

const DateListContainer = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2px;
`;

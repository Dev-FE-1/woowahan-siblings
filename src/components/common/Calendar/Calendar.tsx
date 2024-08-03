import { FC, useState } from 'react';
import ControlDate from '@/components/common/Calendar/ControlDate';
import CalenderContents from '@/components/common/Calendar/CalenderContents';
import styled from '@emotion/styled';

export interface ICalendarProps {
	isOfficial: boolean;
}

const Calendar: FC<ICalendarProps> = ({ isOfficial }) => {
	const [nowDate, setNowDate] = useState<Date>(new Date());

	return (
		<Container>
			<ControlDate nowDate={nowDate} setNowDate={setNowDate} />
			<CalenderContents nowDate={nowDate} isOfficial={isOfficial} />
		</Container>
	);
};

export default Calendar;

const Container = styled.span`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;
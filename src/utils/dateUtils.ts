import { Timestamp } from 'firebase/firestore';
import { IScheduleProps } from '@/hooks/useSchedules';
import { ISchedule } from '@/pages/Schedule/ScheduleDetail';

export const formatDateWithLeadingZeros = (timestamp: Timestamp) => {
	const date = timestamp.toDate();
	return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

export const formatDateWithoutLeadingZeros = (timestamp: Timestamp) => {
	const date = timestamp.toDate();
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const getDayType = (timestamp: Timestamp): 'weekday' | 'saturday' | 'sunday' => {
	const day = timestamp.toDate().getDay();
	if (day === 0) return 'sunday';
	if (day === 6) return 'saturday';
	return 'weekday';
};

export const sortByWorkType = (
	a: IScheduleProps | ISchedule,
	b: IScheduleProps | ISchedule,
): number => {
	const workTypeOrder = ['open', 'middle', 'close'];
	const aWorkType = 'workingTimes' in a ? a.workingTimes[0] : a.workTime;
	const bWorkType = 'workingTimes' in b ? b.workingTimes[0] : b.workTime;
	return workTypeOrder.indexOf(aWorkType) - workTypeOrder.indexOf(bWorkType);
};

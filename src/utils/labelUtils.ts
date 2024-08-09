import { colors } from '@/constants/colors';

const workTypeLabels: { [key: string]: string } = {
	cover: '대타근무',
	special: '특별근무',
	vacation: '휴가',
	early: '조퇴',
	all: '전체',
};

export const getWorkTypeLabel = (type: string) => {
	return workTypeLabels[type] || type;
};

const approvedStatusLabels: { [key: string]: string } = {
	pending: '대기',
	approved: '승인',
	rejected: '반려',
	all: '전체',
};

export const getApprovedStatusLabel = (type: string) => {
	return approvedStatusLabels[type] || type;
};

const shiftTypeLabels: { [key: string]: { value: string; label: string; color: string } } = {
	open: {
		value: '오픈 (07:00~12:00)',
		label: '오픈 (07:00~12:00)',
		color: `${colors.primaryYellow}`,
	},
	middle: {
		value: '미들 (12:00~17:00)',
		label: '미들 (12:00~17:00)',
		color: `${colors.afternoonPink}`,
	},
	close: {
		value: '마감 (17:00~22:00)',
		label: '마감 (17:00~22:00)',
		color: `${colors.nightGreen}`,
	},
};

export const getShiftTypeLabel = (type: string) => {
	return shiftTypeLabels[type] || { value: type, label: type, color: '#000000' };
};

const workTypeLabelsEn: { [key: string]: string } = {
	대타근무: 'cover',
	특별근무: 'special',
	휴가: 'vacation',
	조퇴: 'early',
};

export const getWorkTypeLabelEn = (type: string) => {
	return workTypeLabelsEn[type] || type;
};

const shiftTypeLabelsEn: { [key: string]: string } = {
	'오픈 (07:00~12:00)': 'open',
	'미들 (12:00~17:00)': 'middle',
	'마감 (17:00~22:00)': 'close',
};

export const getShiftTypeLabelEn = (type: string) => {
	return shiftTypeLabelsEn[type] || type;
};

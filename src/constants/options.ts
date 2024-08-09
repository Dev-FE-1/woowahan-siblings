import { colors } from './colors';

export const workTimeOption = [
	{
		value: '오픈 (07:00~12:00)',
		label: '오픈 (07:00~12:00)',
		color: `${colors.primaryYellow}`,
	},
	{
		value: '미들 (12:00~17:00)',
		label: '미들 (12:00~17:00)',
		color: `${colors.afternoonPink}`,
	},
	{
		value: '마감 (17:00~22:00)',
		label: '마감 (17:00~22:00)',
		color: `${colors.nightGreen}`,
	},
];

export const correctionTypeOption = [
	{ value: '대타근무', label: '대타근무' },
	{ value: '특별근무', label: '특별근무' },
	{ value: '휴가', label: '휴가' },
	{ value: '조퇴', label: '조퇴' },
];

export const correctionTypeOptionAll = [
	{ value: '전체', label: '전체' },
	{ value: '대타근무', label: '대타근무' },
	{ value: '특별근무', label: '특별근무' },
	{ value: '휴가', label: '휴가' },
	{ value: '조퇴', label: '조퇴' },
];

export const approvedStatusOption = [
	{ value: '전체', label: '전체' },
	{ value: '대기', label: '대기' },
	{ value: '승인', label: '승인' },
	{ value: '반려', label: '반려' },
];

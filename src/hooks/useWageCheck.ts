import getOfficialWage from '@/api/work/getOfficialWage';
import getPersonalWage from '@/api/work/getPersonalWage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { IOfficialWageItem } from '@/components/Wage/WorkHistory';

const fetchPersonalWage = async (year: number, month: number) => {
	const wageData = await getPersonalWage(year, month);
	return wageData;
};

const fetchOfficialWage = async (year: number, month: number) => {
	const wageOfficialData = await getOfficialWage(year, month);
	return wageOfficialData;
};

const useWageCheck = () => {
	const [year, setYear] = useState(new Date().getFullYear());
	const [month, setMonth] = useState(new Date().getMonth() + 1);
	const navigate = useNavigate();

	const { data: personalWageData, error: personalWageError } = useQuery(
		['personalWage', year, month],
		() => fetchPersonalWage(year, month),
	);

	const { data: officialWageData, error: officialWageError } = useQuery(
		['officialWage', year, month],
		() => fetchOfficialWage(year, month),
	);

	const handleMonthChange = (newYear: number, newMonth: number) => {
		setYear(newYear);
		setMonth(newMonth);
	};

	const getErrorMessage = (error: unknown): string => {
		if (error instanceof Error) {
			return error.message;
		}
		return 'An unknown error occurred';
	};

	const handleItemClick = (item: IOfficialWageItem) => {
		navigate(`/wage/check/detail`, { state: { item } });
	};

	return {
		year,
		month,
		personalWageData,
		personalWageError,
		officialWageData,
		officialWageError,
		handleMonthChange,
		getErrorMessage,
		handleItemClick,
	};
};

export default useWageCheck;

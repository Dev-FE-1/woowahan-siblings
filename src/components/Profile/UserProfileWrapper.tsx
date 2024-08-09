import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/stores/store';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import getUserInfo from '@/api/user/getUserInfo';
import { setUserInfo } from '@/stores/userInfoSlice';
import UserProfile from '@/components/Profile/UserProfile';

const fetchUserInfo = async () => {
	const userInfo = await getUserInfo();
	return userInfo;
};

const UserProfileWrapper = () => {
	const dispatch: AppDispatch = useDispatch();
	const { data, error } = useQuery('userInfo', fetchUserInfo, {
		suspense: true,
	});

	useEffect(() => {
		if (data) {
			dispatch(setUserInfo(data));
		}
	}, [data, dispatch]);

	if (error instanceof Error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<UserProfile
			workPlace={data?.workPlace || '근무지 없음'}
			name={data?.name || '미정'}
			workTime={data?.workingSets || { times: [], weeks: [] }}
		/>
	);
};

export default UserProfileWrapper;

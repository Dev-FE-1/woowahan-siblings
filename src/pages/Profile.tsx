import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/stores/store';
import { useEffect, Suspense } from 'react';
import { clearUserInfo } from '@/stores/userInfoSlice';
import ProfileMenu from '@/components/Profile/ProfileMenu';
import Loading from '@/components/Loading/Loading';
import UserProfileWrapper from '@/components/Profile/UserProfileWrapper';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import UnderlineTextButton from '@/components/common/Button/UnderlineTextButton';
import logout from '@/api/auth/logout';

const Profile = () => {
	const navigate = useNavigate();
	const dispatch: AppDispatch = useDispatch();

	const { error } = useSelector((state: RootState) => state.userInfo);

	const logoutBtnHandler = async () => {
		const isLogoutSuccess = await logout();

		if (isLogoutSuccess) navigate('/login');
	};

	useEffect(() => {
		return () => {
			dispatch(clearUserInfo());
		};
	}, [dispatch]);

	return (
		<>
			{error ? (
				<div>{error}</div>
			) : (
				<Suspense fallback={<Loading />}>
					<UserProfileWrapper />
					<ProfileMenu />
					<UTButtonWrapper>
						<UnderlineTextButton label="로그아웃" onClick={logoutBtnHandler} />
					</UTButtonWrapper>
				</Suspense>
			)}
		</>
	);
};

const UTButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0 100px 0;
`;

export default Profile;

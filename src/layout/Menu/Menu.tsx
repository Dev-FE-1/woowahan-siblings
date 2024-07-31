/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import { Home, Calendar, WalletMinimal, User } from 'lucide-react';
import { colors } from '@/constants/colors';
import MenuItem from './MenuItem';

const Menu = ({ css }: { css?: SerializedStyles }) => {
	const location = useLocation();

	return (
		<Header css={css}>
			<Nav>
				<NavList>
					<MenuItem
						to="/"
						icon={
							<Home
								css={iconStyle(
									location.pathname === '/' ||
										location.pathname.startsWith('/home'),
								)}
							/>
						}
						label="홈"
						isActive={
							location.pathname === '/' || location.pathname.startsWith('/home')
						}
					/>
					<MenuItem
						to="/schedule"
						icon={
							<Calendar css={iconStyle(location.pathname.startsWith('/schedule'))} />
						}
						label="일정표"
						isActive={location.pathname.startsWith('/schedule')}
					/>
					<MenuItem
						to="/wage/check"
						icon={
							<WalletMinimal css={iconStyle(location.pathname.startsWith('/wage'))} />
						}
						label="급여"
						isActive={location.pathname.startsWith('/wage')}
					/>
					<MenuItem
						to="/profile"
						icon={<User css={iconStyle(location.pathname.startsWith('/profile'))} />}
						label="프로필"
						isActive={location.pathname.startsWith('/profile')}
					/>
				</NavList>
			</Nav>
		</Header>
	);
};

export default Menu;

const Header = styled.header`
	position: fixed;
	bottom: 0;
	width: 100%;
	max-width: 430px;
	height: 60px;
	background-color: ${colors.veryLightGray};
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid ${colors.lightGray};
`;

const Nav = styled.nav`
	display: flex;
	padding: 6px 0 12px 0;
`;

const NavList = styled.ul`
	display: flex;
	gap: 54px;
	list-style: none;
	padding: 0;
	margin: 0;
`;

const iconStyle = (isActive: boolean) => css`
	width: 26px;
	height: 26px;
	stroke-width: 1.4;
	color: ${isActive ? colors.black : colors.gray};
`;
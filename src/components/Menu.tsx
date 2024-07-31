/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import { Home, Calendar, WalletMinimal, User } from 'lucide-react';
import { colors } from '@/constants/colors';
import NavItem from '@/components/NavItem';

const Menu = ({ css }: { css?: SerializedStyles }) => {
	const location = useLocation();

	return (
		<header css={[headerStyle, css]}>
			<nav css={navStyle}>
				<ul css={navListStyle}>
					<NavItem
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
					<NavItem
						to="/schedule"
						icon={
							<Calendar css={iconStyle(location.pathname.startsWith('/schedule'))} />
						}
						label="일정표"
						isActive={location.pathname.startsWith('/schedule')}
					/>
					<NavItem
						to="/wage"
						icon={
							<WalletMinimal css={iconStyle(location.pathname.startsWith('/wage'))} />
						}
						label="급여"
						isActive={location.pathname.startsWith('/wage')}
					/>
					<NavItem
						to="/profile"
						icon={<User css={iconStyle(location.pathname.startsWith('/profile'))} />}
						label="프로필"
						isActive={location.pathname.startsWith('/profile')}
					/>
				</ul>
			</nav>
		</header>
	);
};

export default Menu;

const headerStyle = css`
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

const navStyle = css`
	display: flex;
	padding: 6px 0 12px 0;
`;

const navListStyle = css`
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

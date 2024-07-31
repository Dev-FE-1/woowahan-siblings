import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IMenuItemProps } from '@/interfaces/menu';
import { colors } from '@/constants/colors';

const MenuItem = ({ to, icon, label, isActive }: IMenuItemProps) => (
	<MenuItemContainer>
		<StyledLink to={to} isActive={isActive}>
			<IconWrapper>{icon}</IconWrapper>
			<LinkText isActive={isActive}>{label}</LinkText>
		</StyledLink>
	</MenuItemContainer>
);

export default MenuItem;

const MenuItemContainer = styled.li`
	display: flex;
	align-items: center;
`;

const StyledLink = styled(Link)<{ isActive: boolean }>`
	display: flex;
	align-items: center;
	flex-direction: column;
	color: ${({ isActive }) => (isActive ? colors.black : colors.gray)};
	text-decoration: none;
	&:hover {
		color: ${({ isActive }) => (isActive ? colors.black : colors.gray)};
	}
`;

const IconWrapper = styled.div`
	width: 26px;
	height: 26px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LinkText = styled.span<{ isActive: boolean }>`
	font-size: 12px;
	color: ${({ isActive }) => (isActive ? colors.black : colors.gray)};
`;
import { colors } from '@/constants/colors';
import { fontWeight } from '@/constants/font';
import styled from '@emotion/styled';
import IconButton from '../common/Button/IconButton';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfileMenu = () => {
	const menuItems = [
		{ name: '이용안내', path: '/guide' },
		{ name: '고객센터', path: '/customer-service' },
		{ name: '알림설정', path: '/notification-settings' },
		{ name: '환경설정', path: '/settings' },
	];

	return (
		<MenuContainer>
			{menuItems.map((item, index) => (
				<MenuItem key={index} to={item.path}>
					{item.name}
					<IconButton IconComponent={ChevronRight} shape="transparent" size={34} />
				</MenuItem>
			))}
		</MenuContainer>
	);
};

const MenuContainer = styled.div`
	padding: 0 20px;
`;
const MenuItem = styled(Link)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: ${fontWeight.medium};
	padding: 20px 0;
	border-bottom: 1px solid ${colors.lightGray};
	cursor: pointer;
`;

export default ProfileMenu;

import styled from '@emotion/styled';
import { colors } from '@/constants/colors';

const ModalContent = styled.div`
	background-color: ${colors.white};
	padding: 20px 20px 30px;
	border-radius: 8px 8px 0 0;
	width: 100%;

	@media (min-width: 400px) {
		padding: 20px 20px 36px;
	}
`;

export default ModalContent;

/** @jsxImportSource @emotion/react */
import LoadingDuck from '@/components/Loading/LoadingDuck';
import { colors } from '@/constants/colors';
import { fontSize, fontWeight } from '@/constants/font';
import styled from '@emotion/styled';

const UnderConstruction = () => {
	return (
		<Container>
			<Content>
				<LoadingDuck />
				<Message>이 페이지는 준비 중입니다.</Message>
				<Description>곧 업데이트 예정입니다. 조금만 기다려 주세요!</Description>
			</Content>
		</Container>
	);
};

export default UnderConstruction;

const Container = styled.div`
	margin-top: 40px;
	display: flex;
	justify-content: center;

	@media (min-width: 400px) {
		margin-top: 100px;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const Message = styled.div`
	font-size: ${fontSize.xxl};
	font-weight: ${fontWeight.bold};
	color: ${colors.darkestGray};
	margin-bottom: 10px;
`;

const Description = styled.div`
	color: ${colors.gray};
`;

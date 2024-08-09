import styled from '@emotion/styled';
import LoadingDuck from './LoadingDuck';

const Loading = () => {
	return (
		<Container>
			<LoadingDuck />
			<Message>로딩중 ...</Message>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	text-align: center;
`;

const Message = styled.h1`
	font-size: 18px;
	margin-top: 60px;
`;

export default Loading;

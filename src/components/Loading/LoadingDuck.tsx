import styled from '@emotion/styled';
import loadingDuckGIF from '@/assets/loading_duck.gif';

const LoadingDuck = () => {
	return (
		<ImgContainer>
			<img src={loadingDuckGIF} alt="Loading..." />
		</ImgContainer>
	);
};

const ImgContainer = styled.div`
	width: 240px;
	img {
		width: 100%;
		height: 276px;
	}
`;

export default LoadingDuck;

import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '@/constants/colors';
import NotFoundImage from '@/assets/logo_404.svg';
import { fontSize, fontWeight } from '@/constants/font';

export const NotFoundPage = () => {
	return (
		<Container>
			<div className="img-container">
				<img src={NotFoundImage} alt="404 Not Found" />
			</div>
			<Title>원하시는 페이지를 찾을 수 없습니다.</Title>
			<Description>
				원하시는 페이지를 찾을 수 없습니다.
				<br />
				찾으려는 페이지의 주소가 잘못 입력되었거나,
				<br />
				주소의 변경 혹은 삭제로 인해 사용할 수 없습니다.
				<br />
				입력하신 페이지의 주소가 정확한지
				<br />
				다시 한번 확인해 주세요.
			</Description>
			<StyledLink to="/">홈으로 가기</StyledLink>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: ${colors.white};
	padding: 20px;
	text-align: center;

	.img-container {
		width: 70%;
		img {
			width: 100%;
			margin-bottom: 24px;
		}
	}

	@media (min-width: 400px) {
		.img-container {
			max-width: 300px;
		}
	}
`;

const Title = styled.h2`
	font-size: ${fontSize.xl};
	margin: 0;
	color: ${colors.black};
	margin-bottom: 16px;

	@media (min-width: 400px) {
		font-size: ${fontSize.xxl};
	}
`;

const Description = styled.p`
	margin: 0;
	margin-bottom: 24px;
	color: ${colors.gray};
	line-height: 1.6;
	@media (min-width: 400px) {
		font-size: ${fontSize.lg};
	}
`;

const StyledLink = styled(Link)`
	color: ${colors.white};
	text-decoration: none;
	background-color: ${colors.primaryYellow};
	padding: 10px 28px;
	border-radius: 8px;
	transition: background-color 0.3s ease;
	font-weight: ${fontWeight.semiBold};

	&:hover {
		background-color: ${colors.primaryYellowHover};
		color: white;
	}

	@media (min-width: 400px) {
		font-size: ${fontSize.lg};
	}
`;

export default NotFoundPage;

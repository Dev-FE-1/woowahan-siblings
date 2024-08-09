import styled from '@emotion/styled';
import logo from '@/assets/logo.svg';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button/Button';
import { messages } from '@/constants/messages';
import { colors } from '@/constants/colors';
import useLogin from '@/hooks/useLogin';
import { fontSize } from '@/constants/font';

const Login = () => {
	const {
		id,
		pw,
		isLoginError,
		setId,
		setPw,
		inputHandler,
		inputKeyDownHandler,
		loginBtnHandler,
	} = useLogin();

	return (
		<Container>
			<div className="logo-container">
				<img src={logo} alt="logo" />
			</div>
			<div className="login-container">
				<Input
					value={id}
					onChange={inputHandler(setId)}
					onKeyDown={(e) => {
						if (id && pw) {
							inputKeyDownHandler(e);
						}
					}}
					placeholder="아이디"
				/>
				<Input
					type="password"
					value={pw}
					onChange={inputHandler(setPw)}
					onKeyDown={(e) => {
						if (id && pw) {
							inputKeyDownHandler(e);
						}
					}}
					placeholder="비밀번호"
				/>
			</div>
			{isLoginError && <ErrorMassage>{messages.loginErrorMessage}</ErrorMassage>}
			{!!id && !!pw ? (
				<Button label="로그인" onClick={loginBtnHandler} />
			) : (
				<Button label="로그인" onClick={loginBtnHandler} disabled />
			)}
			<InfoMassage>
				{messages.loginInfoMessage}
				<br />
				{messages.loginInfoEmail}
			</InfoMassage>
		</Container>
	);
};

const Container = styled.div`
	height: 100vh;
	padding: 130px 28px 0;

	.logo-container {
		margin-bottom: 36px;
		display: flex;
		justify-content: center;
		img {
			width: 260px;
		}
	}

	.login-container {
		Input {
			margin-bottom: 10px;
		}
		Input:nth-of-type(2) {
			margin-bottom: 0px;
		}
	}

	& > Button {
		margin: 18px 0;
	}
`;

const ErrorMassage = styled.span`
	margin-left: 5px;
	color: ${colors.red};
	font-size: ${fontSize.sm};
`;

const InfoMassage = styled.span`
	color: ${colors.gray};
	font-size: ${fontSize.sm};
`;

export default Login;

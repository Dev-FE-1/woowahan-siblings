import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '@/api/auth/login';

const useLogin = () => {
	const [id, setId] = useState<string>('');
	const [pw, setPw] = useState<string>('');
	const [isLoginError, setIsLoginError] = useState<boolean>(false);
	const navigate = useNavigate();

	const inputHandler =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setter(e.target.value);
		};

	const inputKeyDownHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			loginBtnHandler();
		}
	};

	const loginBtnHandler = async () => {
		const isLoginSuccess = await login(id, pw);

		if (isLoginSuccess) {
			navigate('/');
		} else {
			setIsLoginError(true);
			setId('');
			setPw('');
		}
	};

	return {
		id,
		pw,
		isLoginError,
		setId,
		setPw,
		inputHandler,
		inputKeyDownHandler,
		loginBtnHandler,
	};
};

export default useLogin;

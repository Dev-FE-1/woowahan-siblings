import { auth } from '@/firebaseConfig';
import { signOut } from 'firebase/auth';

// 로그아웃 API
const logout = async () => {
	try {
		await signOut(auth);
		const sessionKey = `firebase:authUser:${import.meta.env.VITE_FIREBASE_API_KEY as string}:[DEFAULT]`;

		if (sessionStorage.getItem(sessionKey)) {
			sessionStorage.removeItem(sessionKey);
		}
		return true;
	} catch (error) {
		return false;
	}
};

export default logout;

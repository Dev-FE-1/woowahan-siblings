import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 라우팅 시 스크롤을 최상단으로 초기화시키는 로직 컴포넌트
const ScrollToTop = (): null => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

export default ScrollToTop;

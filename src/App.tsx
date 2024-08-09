import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import checkAuth from '@/api/auth/checkAuth';
import Home from '@/pages/Home';
import Schedule from '@/pages/Schedule/Schedule';
import ScheduleDetail from '@/pages/Schedule/ScheduleDetail';
import Wage from '@/pages/Wage/Wage';
import WageCheck from '@/pages/Wage/WageCheck/WageCheck';
import WageCheckDetail from '@/pages/Wage/WageCheck/WageCheckDetail';
import Correction from '@/pages/Wage/Correction/Correction';
import CorrectionDetail from '@/pages/Wage/Correction/CorrectionDetail';
import Profile from '@/pages/Profile';
import CorrectionRequest from '@/pages/Wage/Correction/CorrectionRequest';
import GlobalStyles from '@/styles/GlobalStyles';
import Layout from '@/layout/Layout';
import Login from '@/pages/Login';
import UnderConstruction from '@/pages/UnderConstruction';
import ScrollToTop from '@/components/ScrollToTop';
import NotFoundPage from './pages/NotFoundPage';
import { QueryClient, QueryClientProvider } from 'react-query';

export interface IPrivateRouteProps {
	element: JSX.Element;
}
const queryClient = new QueryClient();

const PrivateRoute = () => {
	return checkAuth() ? <Outlet /> : <Navigate to="/login" replace />;
};

const App = () => (
	<BrowserRouter>
		<GlobalStyles />
		<ScrollToTop />
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route element={<PrivateRoute />}>
						<Route index element={<Home />} />
						<Route path="schedule" element={<Schedule />} />
						<Route path="schedule/:date" element={<ScheduleDetail />} />
						<Route path="wage" element={<Wage />}>
							<Route path="check" element={<WageCheck />} />
							<Route path="correction" element={<Correction />} />
						</Route>
						<Route path="wage/check/:id" element={<WageCheckDetail />} />
						<Route path="wage/correction/create" element={<CorrectionRequest />} />
						<Route path="wage/correction/:id" element={<CorrectionDetail />} />
						<Route path="profile" element={<Profile />} />
						<Route path="guide" element={<UnderConstruction />} />
						<Route path="customer-service" element={<UnderConstruction />} />
						<Route path="notification-settings" element={<UnderConstruction />} />
						<Route path="settings" element={<UnderConstruction />} />
					</Route>
					<Route path="login" element={<Login />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</QueryClientProvider>
	</BrowserRouter>
);

export default App;

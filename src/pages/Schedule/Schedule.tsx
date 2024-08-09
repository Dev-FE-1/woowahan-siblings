import Title from '@/components/common/Title';
import Loading from '@/components/Loading/Loading';
import styled from '@emotion/styled';
import { Suspense, lazy } from 'react';
const Calendar = lazy(() => import('@/components/common/Calendar/Calendar'));

const Schedule = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Container>
				<Title title="개인근무 일정표" className="title" />
				<Calendar isOfficial={false} />
			</Container>
		</Suspense>
	);
};

export default Schedule;

const Container = styled.div`
	padding-bottom: 60px;
	.title {
		padding-top: 20px;
		padding-bottom: 14px;
	}
`;

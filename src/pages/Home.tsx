import SummaryInfoCard from '@/components/Home/SummaryInfoCard';
import Calendar from '@/components/common/Calendar/Calendar';
import Title from '@/components/common/Title';
import styled from '@emotion/styled';

const Home = () => {
	return (
		<Container>
			<SummaryInfoCard />
			<Title title="공식 근무 스케줄" className="title" />
			<Calendar isOfficial={true} />
		</Container>
	);
};

export default Home;

const Container = styled.div`
	padding-bottom: 60px;
`;

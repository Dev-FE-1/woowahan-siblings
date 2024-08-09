import styled from '@emotion/styled';
import { colors } from '@/constants/colors';
import { fontSize, fontWeight } from '@/constants/font';
import profileImage from '@/assets/profile_image.svg';

interface IUserProfileProps {
	name: string;
	workPlace: string;
	workTime: { times: string[]; weeks: string[] };
}

const dayMap: { [key: string]: string } = {
	mon: '월',
	tue: '화',
	wed: '수',
	thu: '목',
	fri: '금',
	sat: '토',
	sun: '일',
};

const timeMap: { [key: string]: string } = {
	open: '오픈',
	middle: '미들',
	close: '마감',
};

const UserProfile = ({ name, workPlace, workTime }: IUserProfileProps) => {
	const workSchedules = workTime.weeks.map(
		(day, index) => `${dayMap[day]}(${timeMap[workTime.times[index]]})`,
	);

	return (
		<ProfileContainer>
			<Header>
				<Avatar>
					<img src={profileImage} alt="기본이미지" />
				</Avatar>
				<UserInfo>
					<UserName>{name}</UserName>
					<UserWorkPlace>{workPlace} 근무</UserWorkPlace>
				</UserInfo>
			</Header>
			<Schedule>
				<ScheduleTitle>근무스케줄</ScheduleTitle>
				<ScheduleDetails>{workSchedules.join(', ')}</ScheduleDetails>
			</Schedule>
		</ProfileContainer>
	);
};

const ProfileContainer = styled.div`
	padding: 30px 20px 0px;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
`;

const Avatar = styled.div`
	width: 68px;
	height: 68px;
	border-radius: 50%;
	background-color: ${colors.lightestGray};
	margin-right: 20px;
	overflow: hidden;

	img {
		width: 100%;
	}
`;

const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

const UserName = styled.div`
	font-size: ${fontSize.xl};
	font-weight: ${fontWeight.bold};
`;

const UserWorkPlace = styled.div`
	padding: 4px 10px;
	border-radius: 5px;
	margin-top: px;
	background-color: ${colors.primaryYellow};
	color: white;
	font-size: ${fontSize.sm};
	font-weight: ${fontWeight.medium};
`;

const Schedule = styled.div`
	background-color: ${colors.lightestGray};
	padding: 22px 20px;
	border-radius: 8px;
	margin-bottom: 20px;
`;

const ScheduleTitle = styled.div`
	color: ${colors.gray};
	margin-bottom: 5px;
`;

const ScheduleDetails = styled.div`
	width: 190px;
	font-weight: ${fontWeight.medium};
`;

export default UserProfile;

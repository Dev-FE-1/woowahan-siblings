/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';

const Schedule = () => {
	const schedules = [1, 2];
	return (
		<>
			<h1>Schedule Page</h1>
			<ul>
				{schedules.map((id) => (
					<li key={id}>
						<Link to={`${id}`}>Schedule Detail {id}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Schedule;

import {Link} from "react-router-dom";

function People({people}) {

	return (
		<Link to = {`/people/${people.peopleCd}`}>
			<div className = "item">
				<h3>이름 : {people.peopleNm}</h3>
				<h3>역할 : {people.repRoleNm}</h3>
				<h3>작품 : {people.filmoNames}</h3>
			</div>
		</Link>
	);
}

export default People;
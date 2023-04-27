import {Link} from "react-router-dom";

function Main() {

	return (
		<Link to = "/people">
			<div className = "content-row">
				<h1>영화인 보러가기</h1>
			</div>
		</Link>
	);
}

export default Main;
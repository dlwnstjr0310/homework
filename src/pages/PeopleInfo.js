import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {getPeopleInfo} from '../api/MovieAPICall'

function PeopleInfo() {

	const {peopleCd} = useParams();
	const dispatch = useDispatch();
	const result = useSelector(state => state.movieReducer);
	const people = result.people;

	useEffect(
		() => {
			dispatch(getPeopleInfo(peopleCd));
		},
		[peopleCd, dispatch]
	);


	return (
		<div className = "content-col">
			{people &&
				<>
					<h1>코드 : {peopleCd}</h1>
					<h1>이름 : {people.peopleInfoResult.peopleInfo.peopleNm}</h1>
					<h1>성별 : {people.peopleInfoResult.peopleInfo.sex}</h1>
					<h1>직업 : {people.peopleInfoResult.peopleInfo.repRoleNm}</h1>
					<h1>참여 작품 : {people.peopleInfoResult.peopleInfo.filmos.map(filmo => <span
						key = {filmo.movieCd}>{filmo.movieNm}</span>)}
					</h1>
				</>
			}
			<Link to = "/people">목록으로</Link>
		</div>
	);
}

export default PeopleInfo;
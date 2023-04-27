import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviePeople} from "../../api/MovieAPICall";
import People from "../items/People";

function PeopleList() {

	const dispatch = useDispatch();
	const result = useSelector(state => state.movieReducer);
	const peopleList = result.moviepeople;

	console.log('result : ', result);
	console.log('List : ', peopleList);

	useEffect(
		() => {
			dispatch(getMoviePeople());
		},
		[dispatch]
	);

	return (
		<div className = "content-row">
			{peopleList && peopleList.peopleListResult.peopleList.map(people => <People key = {people.peopleCd} people = {people}/>)}
		</div>
	);
}

export default PeopleList;
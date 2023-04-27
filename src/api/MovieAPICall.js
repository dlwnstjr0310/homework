import {getMoviepeople, getPeople} from "../modules/MovieModule";
import { request } from "./api";

const API_KEY = 'a76e11eb4216cd9f0a164e6e97070b3d';


export function getMoviePeople() {

	console.log('moviePeople 호출');

	return async (dispatch, getState) => {

		const MOVIE_DOMAIN = `http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=${API_KEY}&itemPerPage=30`;

		const result = await request('GET',MOVIE_DOMAIN);

		dispatch(getMoviepeople(result));
	}
}

export function getPeopleInfo(peopleCd) {

	return async (dispatch, getState) => {

		const PEOPLE_DOMAIN = `http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?key=${API_KEY}&peopleCd=${peopleCd}`

		const result = await request('GET',PEOPLE_DOMAIN);

		dispatch(getPeople(result));
	}
}
import {createActions, handleActions} from 'redux-actions';

const initialState = {};

const GET_MOVIEPEOPLE = 'movie/GET_MOVIEPEOPLE';
const GET_PEOPLE = 'movie/GET_PEOPLE';

export const { movie : {getMoviepeople, getPeople}} = createActions({
	[GET_MOVIEPEOPLE] : (res) => ({moviepeople : res}),
	[GET_PEOPLE] : (res) => ({people: res})
});

const movieReducer = handleActions({
	[GET_MOVIEPEOPLE]: (store, {payload}) => payload,
	[GET_PEOPLE]: (store, {payload}) => payload
}, initialState);

export default movieReducer;
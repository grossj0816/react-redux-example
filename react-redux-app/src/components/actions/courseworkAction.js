import { GET_COURSEWORK } from '../actions/types';

 

export const getCoursework = (value) => dispatch => {
    console.log('FETCH COURSEWORK...');
    console.log('Contact ID: ' + value);
    fetch(`https://9cyv7bdpm4.execute-api.us-east-1.amazonaws.com/r/coursework/${value}`,
    {
        method: 'GET',
    })
    .then(res => res.json())
    .then(coursework => dispatch({
        type: GET_COURSEWORK,
        payload: coursework
    }));
}
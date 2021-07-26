import {FETCH_USERS, NEW_USER} from '../actions/types';

//we export the function that will as
export const fetchUsers = () => dispatch => {
    console.log('FETCHING USERS...');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => dispatch({
        type: FETCH_USERS,
        payload: users
    }));
}

export const postUser = (userInfo) => dispatch => {
    console.log('POSTING USER INFO...');
    fetch('https://jsonplaceholder.typicode.com/users',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo),
    })
    .then(res => res.json())
    .then(user => dispatch({
        type: NEW_USER,
        payload: user
    }));
}
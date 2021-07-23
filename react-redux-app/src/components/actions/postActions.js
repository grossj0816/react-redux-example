import { FETCH_POSTS, NEW_POST } from "../actions/types";

export const fetchPosts = () => dispatch => {
        console.log('FETCHING DATA...');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}

export const createPost = (post) => dispatch => {
    console.log('POSTING DATA...');

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post 
    }));

}
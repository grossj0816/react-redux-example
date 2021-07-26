import { combineReducers } from "redux";
import postReducer from './postReducer';
import userReducer from "./userReducer";

//this function is used to combine all of our reducers.
//The main purpose of a reducer handles updates to the
//state through an action
export default combineReducers({
    posts: postReducer,
    //added the userReducer
    users: userReducer
});
import { FETCH_USERS, NEW_USER } from "../actions/types";

//initial state for uses in our store
const initialState = {
    items: [],
    item: {},
};

//function sets how we are going to 
export default function(state = initialState, action) 
{
    switch(action.type)
    {
        case FETCH_USERS:
            return {
                //we are grabbing the initial state
                ...state,
                //from our action we will update the state through the 
                //action payload.
                items: action.payload,
            }
        case NEW_USER:
            return {
                ...state,
                item: action.payload,
            }
        default:
            return state;
    }
}
import { GET_COURSEWORK } from '../actions/types';
import { GET_NEW_COURSEWORK } from  '../actions/types';

const initialState = {

    items: [],
    item: {}

};

 
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_COURSEWORK:
            return{
                ...state,
                items: action.payload
            }
        case GET_NEW_COURSEWORK:
            return{
                ...state,
                item: action.payload
            }
        default: 
            return state;

    }

}
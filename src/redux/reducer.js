import jobList from '../JobList';
import {SAVE_JOBS} from './actionTypes';

const initialState = {
    jobList: jobList
};




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_JOBS:
            console.log("Save jobs");
            return {
                ...state
            }
        default:
            console.log("Default reducer");
            return state;
    }
}



export default reducer;
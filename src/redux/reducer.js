import jobList from '../JobList';
import { SAVE_JOB } from './actionTypes';

const initialState = {
    jobList: jobList,
    savedJobs: []
};




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_JOB:
            console.log("Save jobs");
            console.log("Action payload id: ", action.payload.id);
            // let newSavedjobs = state.savedJobs.push(action.payload.id);
            let newSavedJobs = [...state.savedJobs, action.payload.id];
            console.log(state);
            return {
                ...state,
                savedJobs: newSavedJobs
            }
            break;
        default:
            console.log("Default reducer");
            return state;
            break;
    }
}



export default reducer;
import jobList from '../../JobList';
import { SAVE_JOB, UNSAVE_JOB } from '../action/actionTypes';

const initialState = {
    jobList: jobList,
    savedJobs: []
};




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_JOB:
            // console.log("Save jobs");
            // console.log("Action payload id: ", action.payload.id);
            // let newSavedjobs = state.savedJobs.push(action.payload.id);
            let newSavedJobs = [...state.savedJobs, action.payload.id];
            // console.log(state);
            return {
                ...state,
                savedJobs: newSavedJobs
            }
            break;
        case UNSAVE_JOB:
            // console.log("Unsaved job from reducer");
            let newUnsaveJob = state.savedJobs.filter(sj => sj !== action.payload.id);
            console.log("New unsave job ", state.savedJobs);

            return {
                ...state,
                savedJobs: newUnsaveJob
            }
            break;
        default:
            console.log("Default reducer");
            return state;
    }
}



export default reducer;
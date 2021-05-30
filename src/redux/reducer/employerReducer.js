import {POST_JOB, DELETE_JOB} from "../action/actionTypes";

const initialState = {
    name: null
}




const employerReducer = (state= initialState, action)=>{
    if(action.type === POST_JOB){
        console.log("This is employer reducer - post a job");
        return {
            ...state
        }
    }else if(action.type === DELETE_JOB){
        console.log("This is employer reducer - delete a job");
        return {
            ...state
        }
    }else{
        return {
            ...state
        }
    }
}


export default employerReducer;
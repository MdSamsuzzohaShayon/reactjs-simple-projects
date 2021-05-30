import { SAVE_JOB, UNSAVE_JOB } from './actionTypes';




export const saveJob = id => {
    return { type: SAVE_JOB, payload: { id } }
}



export const unsaveJob = id => {
    return { type: UNSAVE_JOB, payload: { id } }
}
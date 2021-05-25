import { SAVE_JOB } from './actionTypes';




export const saveJob = id => {
    return { type: SAVE_JOB, payload: { id } }
}
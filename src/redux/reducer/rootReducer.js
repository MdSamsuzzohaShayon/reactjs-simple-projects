import {combineReducers} from 'redux';
import employeeReducer from "./employeeReducer";
import employerReducer from "./employerReducer";


const rootReducer = combineReducers({
    employee: employeeReducer,
    employer: employerReducer
});



export default rootReducer;
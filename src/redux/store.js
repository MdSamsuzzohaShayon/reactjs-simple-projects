import { createStore } from 'redux';
// import reducer from './reducer/employeeReducer';
import rootReducer from './reducer/rootReducer';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("State- from store: ", store.getState());



export default store;
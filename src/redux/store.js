import { createStore } from 'redux';
import reducer from './reducer/reducer';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("State- from store: ", store.getState());



export default store;
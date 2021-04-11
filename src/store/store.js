import {createStore} from 'redux';
import reducer from './reducers';

const initialState = {
    data: [],
    loading: true
}
const store = createStore(reducer, initialState);

export default store;
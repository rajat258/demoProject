import {combineReducers} from 'redux';
import {homeReducer} from '../slice/HomeSlice';

const rootReducer = combineReducers({
  homeData: homeReducer,
});

export {rootReducer};

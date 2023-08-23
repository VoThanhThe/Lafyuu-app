import {createStore} from 'redux';
import {Reducers} from '../reducers/Reducers';
import {ReducersWishlist} from '../reducers/ReducersWishList';
import { combineReducers } from 'redux';

const routeReducer = combineReducers({Reducers, ReducersWishlist})
export const store = createStore(routeReducer);

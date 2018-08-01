import { combineReducers } from 'redux'
import CommonReducer from './commonReducer.js'
import UiReducer from './uiReducer.js'


export default combineReducers(
    {
        COMMON:CommonReducer,
        UI:UiReducer
    }
);
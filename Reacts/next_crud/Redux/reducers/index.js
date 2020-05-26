import {combineReducers} from 'redux';
import employeeReducer from './employeeReducer'
const reducer=combineReducers({
    employees:employeeReducer
})

export default reducer


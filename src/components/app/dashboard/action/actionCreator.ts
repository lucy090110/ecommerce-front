import {createActions} from 'redux-actions';
import actionTypes from './actionTypes'

export default createActions({
       [actionTypes.GET_CATEGORY]:()=>{},
       [actionTypes.GET_CATEGORY_SUCCESS]:(payload)=>payload,
})

import {createActions} from 'redux-actions';
import actionTypes from './actionTypes'

export default createActions({
   [actionTypes.GET_PRODUCTIONS]:()=>{},
   [actionTypes.GET_PRODUCTIONS_SUCCESS]:(payload)=>payload,
   [actionTypes.GET_PHOTOS]:()=>{},
   [actionTypes.GET_PHOTOS_SUCCESS]:(payload)=>payload
})

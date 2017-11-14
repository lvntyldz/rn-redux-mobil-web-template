import * as ActionTypes from './actionTypes.js';

export const addUser = (text) => {
  const action = {type: ActionTypes.ADD_USER,text };
  return action;
} //addUser

export const deleteUser = (id) => {
  const action = {type: ActionTypes.DELETE_USER,id};
  return action;
} //deleteUser

export const addProduct = (text) => {
  const action = {type: ActionTypes.ADD_PRODUCT,text };
  return action;
} //addProduct

export const deleteProduct = (id) => {
  const action = {type: ActionTypes.DELETE_PRODUCT,id};
  return action;
} //deleteProduct

export const setActivePage = (page) => {
  const action = {type: ActionTypes.SET_ACTIVE_PAGE,page};
  return action;
} //setActivePage

export const setLoginStatus = (status) => {
  const action = {type: ActionTypes.SET_LOGIN_STATUS,status};
  return action;
} //setLoginStatus

import * as ActionTypes from './actionTypes1.js';

export const addDataToList = (text) => {

  const action = {type: ActionTypes.ADD_DATA_TO_LIST,text };
  return action;

} //addDataToList

export const deleteDataFromList = (id) => {
  const action = {type: ActionTypes.DELETE_DATA_FROM_LIST,id};
  return action;
} //addDataToList

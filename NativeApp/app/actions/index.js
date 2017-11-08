import * as ActionTypes from './ActionTypes.js';

export const addDataToList = (text) => {

  console.log("actions-->addDataToList-->text ", text);
  const action = {type: ActionTypes.ADD_DATA_TO_LIST,text }
  console.log("actions-->addDataToList-->action ", action);
  return action;

} //addDataToList

export const deleteDataFromList = (id) => {

  console.log("actions-->deleteDataFromList-->id ", id);
  const action = {type: ActionTypes.DELETE_DATA_FROM_LIST,id}
  console.log("actions-->deleteDataFromList-->action ", action);
  return action;

} //addDataToList

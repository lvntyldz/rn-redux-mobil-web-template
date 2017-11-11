import * as types from '../actions/actionTypes.js';

const addUser = (state, action) => {
  let {text} = action;
  let {users} = state;
  users.push({id: Math.random(), text});
  return users; //return
} //addUser

const removeUserById = (state = {users: []}, id) => {
  const mainState = state.users.filter(users => users.id !== id);
  return mainState;
} //removeUserById

const initialState = {users: []};//initialState

export default function userState(state = initialState, action = {}) {

    switch (action.type) {

      case types.ADD_USER:
        return {
          ...state,
          users: addUser(state, action)
        };//return

      //========== ========== ========== ==========

      case types.DELETE_USER:
        return {
          ...state,
          users: removeUserById(state, action.id)
        };//return

      //========== ========== ========== ==========

      default:
        return state;

    } //switch

}//userState

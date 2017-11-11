import * as types from '../actions/actionTypes.js';

const initialState = {
  page:{
    current:"user",
    //current:"product",
  },//page
};//initialState

const setActivePage = (state, currPage) => {
  let {page} = state;
  page.current = currPage;
  return {page}; //return
} //setActivePage

export default function mainState(state = initialState, action = {}) {

  switch (action.type) {

    case types.SET_ACTIVE_PAGE:
      return {
        ...state,
        users: setActivePage(state, action.page)
      };//return

    default:
      return state;

  } //switch

}//mainState

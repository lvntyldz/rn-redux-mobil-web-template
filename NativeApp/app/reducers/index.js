import * as types from '../actions/actionTypes1.js';

const addData = (state, action) => {
  let {text} = action;
  let {data} = state;
  data.push({id: Math.random(), text});
  return data; //return
} //addData

const removeDataById = (state = {
  data: []
}, id) => {
  const mainState = state.data.filter(data => data.id !== id);
  return mainState;
} //removeDataById

const initialState = {
  data: []
};

export  function mainState(state = initialState, action = {}) {

  switch (action.type) {

    case types.ADD_DATA_TO_LIST:
      return {
        ...state,
        data: addData(state, action)
      };

    //========== ========== ========== ==========

    case types.DELETE_DATA_FROM_LIST:
      return {
        ...state,
        data: removeDataById(state, action.id)
      };

    //========== ========== ========== ==========

    default:
      return state;

  } //switch
}

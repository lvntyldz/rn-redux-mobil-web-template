import * as ActionTypes  from '../actions/ActionTypes.js';

const data = (action) => {

  console.warn("in data ::: ", data);
  let {text} = action;
  return {id: Math.random(), text} //return

} //data

const removeById = (state = [], id) => {

  console.log("reducer-->removeById-->data ", data);

  const datas = state.filter(data => data.id !== id);

  console.log("reducer-->removeById-->return  ", datas);

  return datas;
} //removeById

const datas = (state = [], action) => {

  console.log("reducer-->datas-->state ", state);
  console.log("reducer-->datas-->action ", action);

  let datas = null;

  switch (action.type) {

    case ActionTypes.ADD_DATA_TO_LIST:
      datas = [
        ...state,
        data(action)
      ];
      console.log("reducer-->datas-->ADD_DATA_TO_LIST-->return ", datas);
      return datas;

    case ActionTypes.DELETE_DATA_FROM_LIST:
      datas = removeById(state, action.id);
      console.log("reducer-->datas-->DELETE_DATA_FROM_LIST-->return ", datas);
      return datas;

    default:
      console.log("reducer-->datas-->DEFAULT-->return ", state);
      return state;

  } //switch

} //datas

export default datas;

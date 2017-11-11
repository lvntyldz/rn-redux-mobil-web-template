import * as types from '../actions/actionTypes.js';

const addProduct = (state, action) => {
  let {text} = action;
  let {products} = state;
  products.push({id: Math.random(), text});
  return products; //return
} //addProduct

const removeProductById = (state = {products: []}, id) => {
  const mainState = state.products.filter(products => products.id !== id);
  return mainState;
} //removeProductById

const initialState = {products: []};//initialState

export default function productState(state = initialState, action = {}) {

    switch (action.type) {

      case types.ADD_PRODUCT:
        return {
          ...state,
          products: addProduct(state, action)
        };//return

      //========== ========== ========== ==========

      case types.DELETE_PRODUCT:
        return {
          ...state,
          products: removeProductById(state, action.id)
        };//return

      //========== ========== ========== ==========

      default:
        return state;

    } //switch

}//productState

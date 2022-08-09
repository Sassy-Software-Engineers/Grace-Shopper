import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const ADD_REVIEW = 'ADD_REVIEW';
/**
 * ACTION CREATORS
 */
const setProduct = (product) => ({
  type: GET_PRODUCT,
  product,
});
const updatedProduct = (product) => ({
  type: UPDATE_PRODUCT,
  product,
});
const addReview = (review) => ({
  type: ADD_REVIEW,
  review,
})


/**
 * THUNK CREATORS
 */

export const fetchProduct = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setProduct(data));
  };
};
export const updateProduct = (product) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/products/${product.id}`, product);
    dispatch(updatedProduct(data));
  };
};
export const addNewReview = (review) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/products/${product.id}`, review);
      dispatch(addReview(data));
    } catch (error) {
        console.error(error);
    }
  }
}
const initialState = {
  reviews: [],
}
/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product;
    case UPDATE_PRODUCT:
      return { ...action.product };
    case ADD_REVIEW: 
      return [...state.reviews, action.review]
    default:
      return state;
  }
}

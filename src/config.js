const BASE_URL = process.env.REACT_APP_BASE_URL;

const GET_PRODUCT_API = `${BASE_URL}/products`;
const GET_LIST_API = `${BASE_URL}/products/list`;
const GET_CATEGORY_API = `${BASE_URL}/category/sub`;
const GET_FLOW_API = `${BASE_URL}/products/flow`;
const GET_SLIDE_API = `${BASE_URL}/products/slide`;
const POST_DETAIL_API = `${BASE_URL}/products/details`;
const POST_SIGNIN_API = `${BASE_URL}/users/signin`;
const POST_SIGNUP_API = `${BASE_URL}/users/signup`;
const POST_FINDNAME_API = `${BASE_URL}/users/usernamefind`;

const POST_CART_API = `${BASE_URL}/products/cartget`;
const DELETE_CART_API = `${BASE_URL}/products/cartdelete`;
const POST_ADD_CART_API = `${BASE_URL}/products/cartadd`;
const POST_EDIT_CART_API = `${BASE_URL}/products/cartedit`;

const POST_LIKE_API = `${BASE_URL}/users/like`;
const POST_UNLIKE_API = `${BASE_URL}/users/unlike`;

export {
  BASE_URL,
  GET_PRODUCT_API,
  GET_CATEGORY_API,
  GET_LIST_API,
  GET_FLOW_API,
  GET_SLIDE_API,
  POST_DETAIL_API,
  POST_SIGNIN_API,
  POST_SIGNUP_API,
  POST_FINDNAME_API,
  POST_CART_API,
  POST_ADD_CART_API,
  POST_EDIT_CART_API,
  DELETE_CART_API,
  POST_LIKE_API,
  POST_UNLIKE_API,
};

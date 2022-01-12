// fetch(`${GET_PRODUCT_API}/5`).then(...).then(...);
const BASE_URL = 'http://localhost:8000';
// const BASE_URL = 'http://192.168.0.7:3000';

const GET_PRODUCT_API = `${BASE_URL}/products`;
const GET_LIST_API = `${BASE_URL}/products/list`;
const GET_CATEGORY_API = `${BASE_URL}/category/sub`;
const GET_DETAIL_API = `${BASE_URL}/products/details`;
const POST_SIGNIN_API = `${BASE_URL}/users/signin`;
const POST_SIGNUP_API = `${BASE_URL}/users/signup`;
const POST_FINDNAME_API = `${BASE_URL}/users/usernamefind`;

const POST_CART_API = `${BASE_URL}/products/cartget`;
const DELETE_CART_API = `${BASE_URL}/products/cartdelete`;

export {
  BASE_URL,
  GET_PRODUCT_API,
  GET_CATEGORY_API,
  GET_LIST_API,
  GET_DETAIL_API,
  POST_SIGNIN_API,
  POST_SIGNUP_API,
  POST_FINDNAME_API,
  POST_CART_API,
  DELETE_CART_API,
};

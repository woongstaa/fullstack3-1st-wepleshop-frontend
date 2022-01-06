// fetch(`${GET_PRODUCT_API}/5`).then(...).then(...);
// const BASE_URL = 'http://localhost:8000';
const BASE_URL = 'http://192.168.0.7:3000';
const GET_PRODUCT_API = `${BASE_URL}/products`;
const GET_CATEGORY_API = `${BASE_URL}/category/sub`;
const POST_SIGNIN_API = `${BASE_URL}/users/signin`;
const POST_SIGNUP_API = `${BASE_URL}/users/signup`;

export {
  BASE_URL,
  GET_CATEGORY_API,
  GET_PRODUCT_API,
  POST_SIGNIN_API,
  POST_SIGNUP_API,
};

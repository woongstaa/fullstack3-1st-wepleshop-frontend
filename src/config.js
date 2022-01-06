// fetch(`${GET_PRODUCT_API}/5`).then(...).then(...);
// const BASE_URL = 'http://localhost:8000';
const BASE_URL = 'http://192.168.0.7:3000';
export const GET_PRODUCT_API = `${BASE_URL}/products`;
const GET_CATEGORY_API = `${BASE_URL}/category/sub`;
export { BASE_URL, GET_CATEGORY_API 
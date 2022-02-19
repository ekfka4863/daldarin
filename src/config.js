const BASE_URL = process.env.REACT_APP_BASE_URL;

const POST_SIGNUP_API = `${BASE_URL}/member/signup`;
const POST_LOGIN_API = `${BASE_URL}/member/login`;
const GET_MEMBER_API = `${BASE_URL}/member/mypage/`;

const GET_PRODUCTS_API = `${BASE_URL}/products`;
const GET_DETAIL_API = `${BASE_URL}/products/`;

const POST_CART_API = `${BASE_URL}/cart`;
const GET_CART_API = `${BASE_URL}/cart`;
const PUT_CART_API = `${BASE_URL}/cart`;
const DELETE_CART_API = `${BASE_URL}/cart`;

const POST_ORDER_API = `${BASE_URL}/orders`;
const GET_ORDERS_API = `${BASE_URL}/orders`;

export {
	BASE_URL,
	POST_SIGNUP_API,
	POST_LOGIN_API,
	GET_MEMBER_API,
	GET_PRODUCTS_API,
	GET_DETAIL_API,
	POST_CART_API,
	GET_CART_API,
	PUT_CART_API,
	DELETE_CART_API,
	POST_ORDER_API,
	GET_ORDERS_API,
};

// import {POST_SIGNUP_API}  from ‘<상대경로>/config’;
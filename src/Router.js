// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';   // https://velog.io/@soryeongk/ReactRouterDomV6

// 공통 컴포넌트 임포트 
import Header from "./components/Header";
import Footer from "./components/Footer";

// 컴포넌트 임포트 필수!
import Main from './pages/Main';
import Story from './pages/Story';
import Shopping from './pages/Shopping';
import Benefit from './pages/Benefit';
import Event from './pages/Event';
import ShippingAndOrder from './pages/ShippingAndOrder';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import FindId from './pages/FindId';
import FindPw from './pages/FindPw';

// 상품별 개별 페이지
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Product4 from './pages/Product4';
import Product5 from './pages/Product5';

// 상품 개별페이지 각각 연결 말고 한번에 하는 방법 있을까!?!? 
import ProductEach from './pages/ProductEach';



const Router = () => (
  <BrowserRouter basename="/daldarin" >
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/" element={<Main />} /> */}
      <Route path="/story" element={<Story />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/benefit" element={<Benefit />} />
      <Route path="/event" element={<Event />} />
      <Route path="/shipping-and-order" element={<ShippingAndOrder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/find-id" element={<FindId />} />
      <Route path="/find-pw" element={<FindPw />} />

      {/* 상품별 개별 페이지 */}
      <Route path="/shopping/product-1" element={<Product1 />} />
      <Route path="/shopping/product-2" element={<Product2 />} />
      <Route path="/shopping/product-3" element={<Product3 />} />
      <Route path="/shopping/product-4" element={<Product4 />} />
      <Route path="/shopping/product-5" element={<Product5 />} />


      {/* 상품별 페이지 따로따로 라우팅 말고 한번에 id값으로 구별해서 가능!? */}
      {/* <Route path="/shopping/product-___" element={<ProductEach />} /> */}
      {/* https://yoonjong-park.tistory.com/entry/Build-%EC%9D%B4%ED%9B%84-%ED%9D%B0-%ED%99%94%EB%A9%B4%EB%A7%8C-%EB%82%98%EC%98%A4%EB%8A%94-%EC%9D%B4%EC%9C%A0 */}
    </Routes>
    <Footer />
  </BrowserRouter>
);


// https://velog.io/@ki_blank/React-Router-1.-8njzuummrs
// https://dirask.com/posts/React-route-and-link-difference-jMmRkj
// https://www.youtube.com/watch?v=8VNvaqnAG_E


export default Router;
import { Link } from "react-router-dom";
import { useState } from "react";

// styling
import "../styles/src/Cart.scss";

// img
import inputCheckAllOff from "../assets/img/cart/input_check_02.png";
import inputCheckAllOn from "../assets/img/cart/input_check_02_on.png";


function Cart() {
  const [checkAll, setCheckAll] = useState(false);
  // const [checkAll, setCheckAll] = useState(true);

  const onClickCheckAll = () => {
    setCheckAll(!checkAll);
  };


  return (
    <>
      <div id="cartBox">
        <h2 className="blind">장바구니 페이지입니다.</h2>

        <div className="cart_box_inner">
          <h3>장바구니</h3>

          <div className="cart_box_con">
            <div className="cart_box_list">
              <ul className="cart_box_list_controller">
                {/* 여기 부분 확인하기!! */}
                <li>
                  {/* <label htmlFor="checkAll" onClick={onClickCheckAll}> */}
                  <label htmlFor="checkAll">
                    <input id="checkAll" type="checkbox" />
                    <span className="check_all_btn" onClick={onClickCheckAll}>
                      <img src={(checkAll === false) ? inputCheckAllOff : inputCheckAllOn} style={(checkAll === false) ? {backgroundColor: "#fff"} : {backgroundColor: "#111"}} alt="전체상품 선택하기" />
                      {/* <img src={inputCheckAllOn} alt="전체상품 선택하기" /> */}
                      {/* <img src={inputCheckAllOff} alt="전체상품 선택하기" /> */}
                    </span>
                    <span onClick={onClickCheckAll}>전체선택 (</span>
                    <span className="selected_products_count">{/* 이부분 나중에 api 받아올거면 수정!  */}0/</span>
                    <span className="products_total_count">{/* 이부분 나중에 api 받아올거면 수정! */}0)</span>
                  </label>
                </li>
                <li>선택삭제</li>
              </ul>
              <div className="cart_box_list_con">
                <div className="cart_box_list_initial">
                  <p>장바구니에 담겨있는 상품이 없습니다.</p>
                  <Link to="/shopping">상품 담으러 가기</Link >
                </div>
              </div>
            </div>
            <div className="cart_box_warning">
              <ul className="warning_detail">
                <li>장바구니에 담은 상품은 30일 후 삭제됩니다.</li>
                <li>장바구니에는 최대 50개의 상품을 담으실 수 있습니다.</li>
                <li>무이자 할부 개월수가 서로 다른 상품을 동시 주문 시, 가장 짧은 기간 기준으로 무이자 할부가 가능합니다.</li>
                <li>일부 상품에 대해 결제수단이 제한될 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart;
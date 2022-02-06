// import { Link } from "react-router-dom";

import { useState } from "react";
import "../styles/src/ShoppingAndOrder.scss";



function ShoppingAndOrder() {
  const [orderList, setOrderList] = useState(false);
  // const [orderList, setOrderList] = useState(true);


  return (
    <>
      {/* <div>ShoppingAndOrder 컴포넌트 입니다</div> */}
      <div id="shoppingAndOrderBox">
        <h2 className="blind">주문/배송조회 페이지입니다.</h2>
        
        <div className="box_inner">
          <h3>주문/배송조회</h3>

          <div className="box_con">
            <table>
              <colgroup>
                <col width="*" />
                <col width="15%" />
                <col width="15%" />
                <col width="20%" />
                <col width="10%" />
                <col width="10%" />
              </colgroup>
              <thead>
                <tr>
                  <th>상품정보</th>
                  <th>주문일자</th>
                  <th>배송비</th>
                  <th>진행상태</th>
                  <th>주문 상세</th>
                  <th>취소 요청</th>
                </tr>
              </thead>
              <tbody className="order_list_board">
                {/* tr이랑 td들은 앞으로 받아오는 api에 따라... 달라질 수 있음!! */}
                {
                    (orderList !== false) 
                  ?
                    <tr>
                      {/* 원래는 api 받아서 해당 내용 map으로 돌리기?! */}
                      <td>예시상품</td>
                      <td>예시주문일자</td>
                      <td>2500원</td>
                      <td>주문완료</td>
                      <td></td>
                      <td></td>
                    </tr>
                  :
                    <tr className="empty_order_list">
                      <td colSpan={6}>
                        <div>{/* 경고 사인 img */}</div>
                        <p>해당되는 데이터가 없습니다</p>
                      </td>
                    </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingAndOrder;
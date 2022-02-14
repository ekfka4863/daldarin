// import { Link } from "react-router-dom";

import "../styles/src/Event.scss";

// img
import couponImage1 from "../assets/img/event/welcome_coupon_1000.png";
import couponImage2 from "../assets/img/event/welcome_coupon_2000.png";
import couponImage3 from "../assets/img/event/welcome_coupon_5000.png";
import couponBgImage from "../assets/img/event/event_list_bg.jpeg";

// coupons 
const coupons = [
  { 
    coupon: [
      "웰컴 쿠폰 5,000원",
      "[사용기간 2021-08-30 ~ 2022-12-31]",
      couponImage3
    ]
  }, 
  {
    coupon: [
      "웰컴 쿠폰 2,000원",
      "[사용기간 2021-08-30 ~ 2022-12-31]",
      couponImage2
    ]
  },
  {
    coupon: [
      "웰컴 쿠폰 1,000원",
      "[사용기간 2021-08-30 ~ 2022-12-31]",
      couponImage1
    ]
  }
];


function Event() {
  return (
    <>
      {/* <div>Event 컴포넌트 입니다</div> */}
      <div id="eventBox">
        <h2>
          <span className="blind">달다린에서 진행하는 이벤트를 확인하세요.</span>
        </h2>
        <section>
          <div className="event_box_title">
            <h3>daldarin event</h3>
            <p>믿을 수 있는 달달함</p>
          </div>
          <div className="event_box_con">
            <ul>
              {
                coupons.map((elem, idx) => {
                  return (
                    <li style={{backgroundImage: "url(" + `${couponBgImage}` + ")"}}>
                      <div>
                        <span>{elem.coupon[0]}</span>
                        <span>{elem.coupon[1]}</span>
                      </div>
                      <div>
                        <img src={elem.coupon[2]} alt={elem.coupon[idx]}/>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default Event;
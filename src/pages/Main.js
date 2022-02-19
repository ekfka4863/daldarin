import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Slider from 'react-touch-drag-slider';  // reference: https://www.npmjs.com/package/react-touch-drag-slider

// component
import MainPageItem from "../components/MainPageItem";

// img
import main_view_box_bg_img from "../assets/img/main/main_view_box_bg_img.png";
import main_con02_coupon from "../assets/img/main/main_con02_coupon.png";
import main_con04_icon01 from "../assets/img/main/main_con04_icon01.png";
import main_con05_img from "../assets/img/main/main_con05_img.jpg";
import next_slide_indicator_img from "../assets/img/main/next_slide_indicator_img.png";

// API 
import { GET_PRODUCTS_API } from "../config";

// styling 
import "../styles/src/Main.scss";



function Main () {
  const [products, setProducts] = useState([]);

  // api get request -> GET_PRODUCTS_API
  useEffect(() => {
    const asyncGetProduct = async () => {
      try {
        const response = await fetch(GET_PRODUCTS_API);
        const data = await response.json();
        
        setProducts([...data]);

      } catch(error) {
        console.log("error => ", error);
      }
    };
    
    asyncGetProduct();
  }, []);


  return (
    <>
      <div id="mainBox">
        <h2>
          <span className="blind">달다린을 소개합니다</span>
        </h2>
        <div className="view_box">
          <div className="view_box_title">
            <h3>
              내가 아는 맛 그대로! <br />
              당도, 크기 원하는대로 골라드려요.
            </h3>
            <p>
              내 입맛에 맞는 귤, 달콤한 귤들 중에서도 <br />
              당도와 크기를 원하는 대로 골라보세요!
            </p>
          </div>
          <div className="view_box_bg_con">
            {/* <div className="view_box_bg_img"></div> */}
            <img className="view_box_bg_img" src={main_view_box_bg_img} alt="귤 제품 사진" />
          </div>
        </div>
        <div className="main_con_1">
          <div className="main_con_1_title">
            <h3>
              늘 맛있게 <br />
              직접 선택해서 골라 드세요.</h3>
            <p>
              당도와 크기를 세밀하게 구분하는 선과 시스템을 구축해 <br />
              11brix, 12brix 등 폭넓은 선택지를 제공하고 있습니다.
            </p>
          </div>
          <div className="main_con_1_selection">
            <dl className="sugar_content">
              <dt>당도</dt>
              <dd>
                <input id="10brix" type="checkbox" name="10__brix" value="10brix" />
                <label htmlFor="10brix"><span className="blind">10brix</span></label>
                <span>10brix</span>
              </dd>
              <dd>
                <input id="12brix" type="checkbox" name="12__brix" value="12brix" />
                <label htmlFor="12brix"><span className="blind">12brix</span></label>
                <span>12brix</span>
              </dd>
              <dd>
                <input id="14brix" type="checkbox" name="14__brix" value="14brix" />
                <label htmlFor="14brix"><span className="blind">14brix</span></label>
                <span>14brix</span>
              </dd>
              <dd>
                <input id="17brix" type="checkbox" name="17__brix" value="17brix" />
                <label htmlFor="17brix"><span className="blind">17brix</span></label>
                <span>17brix</span>
              </dd>
            </dl>
            <dl className="product_size">
              <dt>크기</dt>
              <dd className="active">
                <input id="smallSize" type="checkbox" name="small__Size" value="small" />
                <label htmlFor="smallSize"><span className="blind">소과</span></label>
                <span>소과</span>
              </dd>
              <dd>
                <input id="mediumSize" type="checkbox" name="medium__Size" value="medium" />
                <label htmlFor="mediumSize"><span className="blind">중과</span></label>
                <span>중과</span>
              </dd>
              <dd>
                <input id="largeSize" type="checkbox" name="large__Size" value="large" />
                <label htmlFor="largeSize"><span className="blind">대과</span></label>
                <span>대과</span>
              </dd>
              <dd>
                <input id="randomSize" type="checkbox" name="random__Size" value="random" />
                <label htmlFor="randomSize"><span className="blind">랜덤</span></label>
                <span>랜덤</span>
              </dd>
            </dl>
          </div>
        </div>
        <div className="main_con_2">
          {/* 이부분은 나중에 component화 해보기! + postman으로도 해보기 */}
          <div className="main_con_2_title">
            <h3>
              달콤한 첫 시작 <br />
              처음 구매는 <span className="orange_h3">할인 쿠폰</span>으로!
            </h3>
            <p>
              지금 구매하시면 첫 구매 할인혜택을 드려요. <br />
              달콤함과 함께 기분좋게 하루를 시작해보세요!
            </p>
          </div>
          <div className="main_con_2_coupon">
            <img src={main_con02_coupon} alt="달다린 할인혜택 10% 할인쿠폰" />
          </div>
        </div>
        <div className="main_con_3">
          <div className="main_con_3_title">
            <h3>늘 좋은 상품만 드릴께요.</h3>
            <p>
              꾸준히 고품질 감귤을 생산하는 농가들과 계약을 이어나가며, <br />
              정기적인 당도 측정을 통해 품질에 대한 기준을 지키고 있습니다.
            </p>
          </div>
          <div className="main_con_3_products">
              <Slider
                onSlideComplete={(i) => {
                  console.log('finished dragging, current slide is', i)
                }}
                onSlideStart={(i) => {
                  console.log('started dragging on slide', i)
                }}
                activeIndex={0}
                threshHold={100}
                transition={0.5}
                scaleOnDrag={true}
              >
              {
                products.map((data, index) => {
                  return (
                    <div>
                      <MainPageItem 
                        id={products[index].id}
                        title={products[index].name}
                        detail={products[index].details}
                        original_price={products[index].original_price}
                        discount_rate={products[index].discount_rate}
                        quantity={products[index].stock_quantity}
                        image_url={products[index].image_url}
                        // discounted_price={products[index].discounted_price}
                        discounted_price={products[index].original_price - (products[index].original_price / 100 * products[index].discount_rate)}
                      />
                      <div className="next_slide_indicator" style={(index !== 4) ? {display : "block"} : {display : "none"}}>
                      {/* <div className="next_slide_indicator"> */}
                        <img className="next_slide_indicator_img" src={next_slide_indicator_img} alt="다음 슬라이드 안내 이미지" style={(index !== 4) ? {display : "block"} : {display : "none"}} />
                      </div>
                    </div>
                  )
                })
              }
              </Slider>
          </div>
        </div>
        <div className="main_con_4">
          <div className="main_con_4_title">
            <h3><span className="blind">달다린의 약속</span></h3>
          </div>
          <div className="main_con_4_promise">
            <div className="promise_1">
              <h4>
                주문부터 배송까지 <br /> <span className="orange_h4">안심</span>하세요.
              </h4>
              <p>
              배송과정에서 상처나고 무른 감귤들, <br />
              고객센터로 문의주시면 신속하게 응대해드립니다!
              </p>
              <div className="img_box">
                <img src={main_con04_icon01} alt="달다린 고객센터" />
              </div>
            </div>
            <div className="promise_2">
              <h4>
                리뷰가 가치를 <br /><span className="orange_h4">증명</span>합니다.
              </h4>
              <p>
                각기 다른 취향과 기준을 가진 구매자들이 <br />
                말하는 달다린의 다양한 매력
              </p>
              <div className="reviews">
                <p>부모님께서 좋아하시네요~!</p>
                <p>선물받아서 먹어보고 너무 맛있어서 구매했어요!</p>
                <p>정말 만족합니다 달달한 귤이에요 ^^</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main_con_5">
          <div className="main_con_5_title">
            <h3>
              소중한 사람들과 함께 <br />
              다같이 <span className="orange_h3">달콤함</span>을 즐겨요!
            </h3>
            <p>
              거래처 선물, 다양한 행사, 모임 등에서 주문부터 배송까지 <br />
              간편한 대량구매 서비스를 이용해보세요.
            </p>
          </div>
          <div className="main_con_5_order">
            <div> 
                <Link to="/shopping">
                  단체주문하기  
                </Link>
            </div>
            <img src={main_con05_img} alt="달다린 귤 이미지" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;
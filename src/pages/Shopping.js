import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

// mockdata/API
// import products from "../data/products.json";

// component 
import Item from "../components/Item";

// API 
// import axios from "axios";
import { GET_PRODUCTS_API } from "../config";


// styling 
import "../styles/src/Shopping.scss"; 

function Shopping() {
  const [products, setProducts] = useState([]);
  
  // api get request -> GET_PRODUCTS_API
  
  useEffect(() => {
    const asyncGetProduct = async () => {
      try {
        const response = await fetch(GET_PRODUCTS_API);
        const data = await response.json();
        
        data.forEach((each) => {
          setProducts(products => [...products, each]);
        });
        // console.log("products => ", products);
      } catch(error) {
        console.log("error => ", error);
      }
    };

    asyncGetProduct();
  }, []);

  // console.log("products => ", products);  // products =>  (5) [{…}, {…}, {…}, {…}, {…}]



  return (
    <>
      <div id="shoppingBox">
        <div className="shopping_box_inner">

          <div className="shopping_box_title">
            <h2>
              <span className="blind">달다린에서 판매하는 제품을 확인하세요.</span>
              daldarin best
            </h2>
            <p>믿을 수 있는 달달함</p>
          </div>

          <div className="shopping_box_con">
            <div className="product_filter_conditions">
              <div className="product_total_qty">상품 {products.length}개</div>
              <ul>
                {/* 나중에 api post 해야하니까 버튼 태그 폼태그로 바꿀지 생각!? */}
                <li className="on"><button>전체</button></li>
                <li><button>낮은가격순</button></li>
                <li><button>높은가격순</button></li>
                <li><button>할인상품</button></li>
              </ul>
            </div>
            <div className="product_list">
              {/* 상품 Item.js로 map 써서 display하기! */}
              {

                products.map((data) => {
                  return (
                    <Item 
                      id={data.id}
                      title={data.name}
                      detail={data.details}
                      original_price={data.original_price}
                      discount_rate={data.discount_rate}
                      quantity={data.stock_quantity}
                      image_url={data.image_url}
                      // discounted_price={data.discounted_price}
                      discounted_price={data.original_price - (data.original_price / 100 * data.discount_rate)}
                    />
                  )
                })
              }
            </div>
          </div>

          <div className="event_info">
            <Link to="event">
              <div>
                <h3>
                  이번 달 구매 아직 안하셨죠? <br />
                  첫 구매는 할인 쿠폰으로!
                </h3>
                <p>얼리버드 혜택</p>
              </div>
              <div>{/* coupon img */}</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shopping;
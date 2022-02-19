//  import { useEffect, useRef } from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

// API 
import { GET_PRODUCTS_API } from "../config";

// styling 
import "../styles/src/ProductEach.scss";


function ProductEach () {
  const [products, setProducts] = useState([]);
  
  let productsCopied = useRef([]);
  // let productsCopied = [];

  const params = useParams();
  const productId = params.id;
  // console.log("productId => ", productId);  // 1

  const toTheTop = () => {
    window.scroll(0, 0);
  };
  toTheTop();


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

  
  // console.log("products => ", products); // products =>  (5) [{…}, {…}, {…}, {…}, {…}]

  const renderEachPage = () => {
    return (
      <div id="productEachBox">
        <h2 className="blind">상품에 대해 더 자세히 살펴보세요.</h2>
        <div className="product_each_box_inner">
          <div className="product_img">
            <img src={products[productId - 1].image_url} alt="제품 이미지" />
          </div>
          <form>
            <div className="product_detail_part_1">
              <h3>{products[productId - 1].name}</h3>
              <p>{products[productId - 1].details}</p>
            </div>
            <div className="product_detail_part_2">
              <ul>
                <li>
                  {
                      (products[productId - 1].discount_rate !== null) 
                    ?
                      products[productId - 1].discount_rate + "%"
                    :
                      null               
                  }
                </li>
                <li>
                  <dl>
                    <dt>
                      {products[productId - 1].original_price - (products[productId - 1].original_price / 100 * products[productId - 1].discount_rate)}
                      <span>원</span>
                    </dt>
                    <dd>
                      {
                          (products[productId - 1].discount_rate !== null) 
                        ?
                          products[productId - 1].original_price + "원"
                        :
                          null               
                      }
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
            <div className="to_cart_or_purchase">
              <button type="submit">장바구니</button>
              <button type="submit">구매하기</button>
            </div>
          </form>
          
        </div>
      </div>
    )
  };


  return (
    <>
      {
          (products.length !== 0) 
        ?
          renderEachPage()
        :
          null
      }
    </>
  )
}

export default ProductEach;
// mockdata/API
import { useParams } from "react-router-dom";
import products from "../data/products.json";


// styling 
import "../styles/src/ProductEach.scss";

function ProductEach () {
  const params = useParams();
  const productId = params.id;
  // console.log(productId);

  const toTheTop = () => {
    window.scroll(0, 0);
  };
  toTheTop();

  return (
    <>
      <div id="productEachBox">
        <h2 className="blind">상품에 대해 더 자세히 살펴보세요.</h2>
        <div className="product_each_box_inner">
          <div className="product_img">
            <img src={products[productId - 1].image_url} alt="제품 이미지" />
          </div>
          <form>
            <div className="product_detail_part_1">
              <h3>{products[productId - 1].title}</h3>
              <p>{products[productId - 1].detail}</p>
            </div>
            <div className="product_detail_part_2">
              <ul>
                <li>
                  {
                      (products[productId - 1].discount_rate !== 0) 
                    ?
                      products[productId - 1].discount_rate + "%"
                    :
                      null               
                  }
                </li>
                {/* <li>{products[productId - 1].detail}</li> */}
                <li>
                  <dl>
                    <dt>
                      {products[productId - 1].original_price - (products[productId - 1].original_price / 100 * products[productId - 1].discount_rate)}
                      <span>원</span>
                    </dt>
                    <dd>
                      {
                          (products[productId - 1].discount_rate !== 0) 
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
    </>
  )
}

export default ProductEach;
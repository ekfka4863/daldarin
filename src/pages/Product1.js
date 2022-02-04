// mockdata/API
import products from "../data/products.json";

// styling 
import "../styles/src/Product.scss";

function Product1 () {
  const uniqueValue = products[0].id;

  return (
    // <div>Product1 페이지...</div>
    <>
      <div id="productBox1">
        <h2 className="blind">상품에 대해 더 자세히 살펴보세요.</h2>

        <div className="product_box_1_inner">
          <div className="product_img">{/* img */}</div>
          <form>
            <div className="product_detail_part_1">
              <h3>{products[uniqueValue - 1].title}</h3>
              <p>{products[uniqueValue - 1].detail}</p>
            </div>
            <div className="product_detail_part_2">
              <ul>
                <li>{products[uniqueValue - 1].discount_rate}%</li>
                {/* <li>{products[uniqueValue - 1].detail}</li> */}
                <li>
                  <dl>
                    <dt>
                      {products[uniqueValue - 1].original_price - (products[uniqueValue - 1].original_price / 100 * products[uniqueValue - 1].discount_rate)}
                      <span>원</span>
                    </dt>
                    <dd>
                      {products[uniqueValue - 1].original_price}
                      <span>원</span>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
            <div className="to_cart_or_purchase">
              <button>장바구니</button>
              <button>구매하기</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Product1;
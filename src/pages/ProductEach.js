// mockdata/API
import products from "../data/products.json";

// styling 
import "../styles/src/ProductEach.scss";

function ProductEach () {

  return (
    // <div>ProductEach 페이지...</div>
    <>
      <div id="productEachBox">
        <h2 className="blind">상품에 대해 더 자세히 살펴보세요.</h2>
        <div className="product_each_box_inner">
          <h3>{products[0].title}</h3>
          
        </div>
      </div>
    </>
  )
}

export default ProductEach;
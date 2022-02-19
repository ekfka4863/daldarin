import { Link } from "react-router-dom";

// styling 
import "../styles/src/Item.scss";

// default img
import img_under_preparation from "../assets/img/shopping/img_under_preparation.png";

function Item ({ id, name, details, original_price, discount_rate, stock_quantity, image_url, discounted_price }) {

  return (
    <>
      <div id="eachItem">
        <Link to={"product/" + `${id}`}>
          <div className="item_inner">
            <div className="item_visual">
              <dl>
                <dt>인기상품</dt>
                {
                    (discount_rate !== null) 
                  ? 
                    <dd className="discount_rate_tag">{discount_rate + "%"}</dd> 
                  :
                    null
                }
                {/* <dd className="discount_rate_tag">{(discountRate !== 0) ? discountRate + "%" : null}</dd> */}
              </dl>
              {/* <img src={img_under_preparation} alt="달다린 제품 미리보기 이미지" /> */}
              <img src={(image_url !== "") ? image_url : img_under_preparation} alt="달다린 제품 미리보기 이미지" />
            </div>
            <div className="item_detail">
              <h3>{name}</h3>
              <div className="item_detail_con">
                <p>{details}</p>
                <ul>
                  {/* <li>{original_price - (original_price / 100 * discount_rate)}원</li> */}
                  <li>{discounted_price}<span>원</span></li>
                  <li>{original_price}<span>원</span></li>
                </ul>
              </div> 
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Item;
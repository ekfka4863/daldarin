import { Link } from "react-router-dom";

// styling 
import "../styles/src/MainPageItem.scss";

function MainPageItem ({ id ,title, detail, original_price, discount_rate, quantity, image_url, discounted_price }) {
  return (
    <>
      <div id="MainPageItem">
        <Link to={"product/" + `${id}`}>
          <div className="item_inner">
            <div className="item_visual">
              <dl>
                <dt>인기상품</dt>
                {
                    (discount_rate !== 0) 
                  ? 
                    <dd className="discount_rate_tag">{discount_rate + "%"}</dd> 
                  :
                    null
                }
                {/* <dd className="discount_rate_tag">{(discountRate !== 0) ? discountRate + "%" : null}</dd> */}
              </dl>
              <img src={image_url} alt="달다린 제품 미리보기 이미지" />
            </div>
            <div className="item_detail">
              <h3>{title}</h3>
              <div className="item_detail_con">
                <p>{detail}</p>
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


export default MainPageItem;



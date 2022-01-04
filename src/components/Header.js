// import "../styles/src/Header.scss";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header id="headBox">
      <Link to="/">
        <h1>
          {/* Link component 삽입할 것 */}
          <span className="blind">안녕하세요. 달다린입니다</span>
        </h1>
      </Link>
      {/* 아래 .gnb_btn 확인하기 */}
      <button className="gnb_btn"></button>
      
      <div className="navigation">
        <h2>
          <span className="blind">navigation</span>
        </h2>
        <nav className="gnb">
          <ul>
            {/* 각각의 li 태그에 Link component 삽입할 것 */}
            <li>
              <Link to="/story" >달다린 스토리</Link>
              </li>
            <li>
              <Link to="/shopping" >쇼핑하기</Link> 
              </li>
            <li>
              <Link to="/benefit" >달다린 혜택</Link>
              </li>
            <li>
              <Link to="/event" >이벤트</Link>
              </li>
            <li>
              <Link to="/shipping-and-order" >배송/주문조회</Link>
            </li>
          </ul>
        </nav>
        <div className="unb">
          {/* 각각의 button 태그에 Link component 삽입할 것 */}
          <button>
            {/* 클릭시 아래 .modal 컴포넌트로 따로 빼든지 해서 불러오기 */}
          </button>
          {/* <button> */}
          {/* <button onClick={() => { window.location.href = "/cart" }}> */}
          {/* <button onClick={() => { window.location.replace("/cart") }}> */}
          <Link to="/cart" >
            <span className="blind">장바구니</span>
            <button></button>
          </Link>
          {/* reference:  https://it-hhhj2.tistory.com/38 */}
          {/* </button> */}
        </div>
      {/* <div className="modal">
        <ul>
          <li>
            <Link to="/login" ><span className="blind">로그인</span></Link>
          </li>
          <li>
            <Link to="/sign" ><span className="blind">회원가입</span></Link>
          </li>
        </ul>
      </div> */}
      </div>
    </header>
  );
}

export default Header;
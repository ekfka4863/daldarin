import "../styles/src/Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";


function Header() {
  const [modal, setModal] = useState(false);

  // Component - modal 
  function Modal () {
    return (
      <div className="modal">
        <ul>
          <li>
            <Link to="/login" >로그인<span className="blind">페이지로 이동하려면 클릭하세요</span></Link>
          </li>
          <li>
            <Link to="/sign-up" >회원가입<span className="blind">페이지로 이동하려면 클릭하세요</span></Link>
          </li>
        </ul>
      </div>
    )
  }

  // function 
  const onClickModal = () => {
    setModal(!modal);
  };

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
          <button onClick={onClickModal}></button>
          {(modal) ? <Modal /> : null}
          <Link to="/cart" >
            <span className="blind">장바구니</span>
            <button></button>
          </Link>
          {/* reference:  https://it-hhhj2.tistory.com/38 */}
          {/* </button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
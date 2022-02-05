import { useState } from "react";
import { Link } from "react-router-dom";

// styling 
import "../styles/src/Header.scss";

// mock data / api 
// import user from "../.............";


function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [sideBar, setSideBar] = useState(false);
  const [modal, setModal] = useState(false);
  // console.log(modal);


  const onClickModalClose = () => {
    const modalBg = document.querySelector('.modal_bg');

    onClickModal();
  };

  // 로그아웃 - 임의로 지정한 함수!?
  const onClickLogout = () => {
    alert("정상적으로 로그아웃 되었습니다.");
    setLoggedIn(!loggedIn);
  };
  
    

  // Component - modal 
  function Modal () {
    return (
      <>
        <div className="modal" onClick={onClickModalClose}>
          <ul>
            {
                (loggedIn !== false) 
              ?
                <>
                  <li>
                    <Link to="/my-page" >마이페이지<span className="blind">페이지로 이동하려면 클릭하세요</span></Link>
                  </li>
                  <li>
                    <button className="logout_btn" onClick={onClickLogout}>로그아웃</button>
                  </li>
                </>
              :
                <>
                  <li>
                    <Link to="/login" >로그인<span className="blind">페이지로 이동하려면 클릭하세요</span></Link>
                  </li>
                  <li>
                    <Link to="/sign-up" >회원가입<span className="blind">페이지로 이동하려면 클릭하세요</span></Link>
                  </li>
                </>
            }
          </ul>
        </div>
        <div className="modal_bg" onClick={onClickModalClose}></div>
      </>
    )
  }

  // Component - sidebar 
  function SideBar () {
    return (
      <>
        <div className="sidebar">
          {/* <div className="sidebar_tab_menu"> */}
          <div className={(loggedIn !== false) ? "sidebar_tab_menu logged_in" : "sidebar_tab_menu"}>
            {
                (loggedIn !== false)
              ?
                <>
                  <div className="sidebar_welcome_message">
                    <span>{"000"} 고객님</span> 
                    <p>달다린에 오신 것을 환영합니다.</p>
                  </div>
                  <ul>
                    <li>
                      <Link to="/my-page" >마이페이지<span className="blind">페이지로 이동하려면 클릭하세요</span></Link>
                    </li>
                    <li>
                      <button className="logout_btn" onClick={onClickLogout}>로그아웃</button>
                    </li>
                  </ul>
                </>
              :
                <>
                  <ul>
                    <li>
                      <Link to="/login" >로그인<span className="blind">페이지로 이동하려면 클릭하세요</span></Link>
                    </li>
                    <li>
                      <Link to="/sign-up" >회원가입<span className="blind">페이지로 이동하려면 클릭하세요</span></Link>
                    </li>
                  </ul>
                </>
            }
          </div>
          <div className="sidebar_nav">
            <ul>
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
          </div>
        </div>
        <div className="sidebar_bg"></div>
      </>
    )
  }


  // function 
  const onClickModal = () => {
    setModal(!modal);
  };

  const onClickSideBar = () => {
    setSideBar(!sideBar);
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
      <button className="gnb_btn" onClick={onClickSideBar}>
        {/* SideBar.js 임포트 해오기!! */}
        {(sideBar) ? <SideBar /> : null}
      </button>
      
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
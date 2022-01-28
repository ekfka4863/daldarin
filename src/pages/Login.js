import "../styles/src/Login.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Cross Origin 허용하는 방법 ->  https://doqtqu.tistory.com/232
// 카카오 로그인 다른 방법 ->  https://m.blog.naver.com/rkdudwl/221906303255
// import KaKaoLogin from 'react-kakao-login';

import {Helmet} from "react-helmet";



function Login() {
  const [saveId, setSaveId] = useState(false);
  const [memberLogin, setMemberLogin] = useState(false);

  // Component 
  function MemberLogin() {
    return (
      <div className="member_login">
        <form name="login__Form" id="loginForm" method="post" action="#">
          <fieldset className="login_parts">
            <div className="login_input_part">
              <input type="text" name="login__Id" id="loginId" placeholder="아이디" />
              <input type="password" name="loginPw" id="loginPw" placeholder="비밀번호" />
            </div>
            <div className="login_check_part">
              <div>
                <input type="checkbox" id="loginSaveId" />
                <label htmlFor="loginSaveId" onClick={onClickSaveId}>
                  <span className={(saveId === true) ? "on" : ""}></span>
                  <span>아이디 저장</span>
                </label>
              </div>
              <ul>
                <li>
                  <Link to="/find-id">아이디 찾기</Link>
                </li>
                <li>
                  <Link to="/find-pw">비밀번호 찾기</Link>
                </li>
              </ul>
            </div>
            <div className="login_btn_part">
              <button>로그인</button>
              <Link to="/sign-up">회원가입</Link>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }

  function NonMemberLogin () {
    return (
      <div className="nonmember_login">
        <div className="login_input_part">
          <input type="text" placeholder="주문자명" />
          <input type="password" placeholder="비밀번호" />
        </div>
        <div className="login_check_part">
          <p>주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.</p>
        </div>
        <div className="login_btn_part">
          <button>조회하기</button>
          <Link to="/sign-up">
            <span>달달한 특별혜택을 원한다면?</span>
            <span>회원가입</span>
          </Link>
        </div>
      </div>
    )
  }



  // function 
  const onClickSaveId = () => {
    setSaveId(!saveId);
  };
  const onClickMemberLogin = () => {
    setMemberLogin(true);
  };
  const onClickNonMemberLogin = () => {
    setMemberLogin(false);
  };
  
  // kakao login API 
  // https://www.youtube.com/watch?v=Re2R2rid1K4
  // https://velog.io/@dulcis-hortus/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%EA%B3%B5%EC%9C%A0-%EA%B8%B0%EB%8A%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0

  return (
    <>
      <div id="loginBox">
        <div className="login_box_title">
          <h2>Login</h2>
          <p>믿을 수 있는 달달함으로 초대합니다.</p>
        </div>
        <div className="login_box_con">
          <div className="login_tab_menu">
            <ul>
              <li className={(memberLogin) ? "on" : null} onClick={onClickMemberLogin}>회원
                <span className="blind">로그인</span>
              </li>
              <li className={(memberLogin) ? null : "on"} onClick={onClickNonMemberLogin}>비회원
                <span className="blind">로그인</span>
              </li>
            </ul>
          </div>
          <div className="login_form">
            {/* 회원 로그인 & 비회원 로그인 */}
            {(memberLogin) ? <MemberLogin/> : <NonMemberLogin/> }

            {/* sns 간편 로그인 */}
            <div className="sns_login">
              <h3>SNS 간편 로그인</h3>
              {/* 여기서 팝업창 띄우는거는 좀 더 찾아보기! */}
              <div className="sns_login_con">
                <button onClick={() => window.open("카카오 로그인 API 파일?!", "kakaotalk_popup_window", "top")}>
                  <span></span>
                  <span>카카오</span>
                </button>

                <button onClick={() => window.open("네이버 로그인 API 파일?!", "naver_popup_window", "top")}>
                  {/* <img src="../assets/img/login/naver_login.png" alt="네이버" /> */}
                  <span className="login_api_img"></span>
                  <span>네이버</span>
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>


      {/* kakao login API */}

      
        
    </>
  )
}

export default Login;


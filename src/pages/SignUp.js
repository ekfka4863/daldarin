import { useState } from "react";
// import { useEffect, useRef, useState } from "react";

// styling 
import "../styles/src/SignUp.scss";

// img 
import inputCheckedOn from "../assets/img/sign_up/input_check_on.png";
import inputCheckedOff from "../assets/img/sign_up/input_check_off.png";

function SignUp() {
  // const [manChecked, setManChecked] = useState(false);
  // const [womanChecked, setWomanChecked] = useState(false);

  // 마케팅 활용 및 광고 수신 - 모두 동의하기 기능 
  const agreeAll = () => {
    const checkboxes = document.getElementsByName('agreement');
    const checkboxesCopy = [...checkboxes]; 
    const checkboxAgreeAll = checkboxesCopy[0];

    checkboxesCopy.forEach((checkbox) => {
      checkbox.checked = checkboxAgreeAll.checked;
    });
  }; // reference:  https://hianna.tistory.com/432





  return (
    <>
      {/* <div>SignUp 컴포넌트 입니다</div> */}
      <div id="signUpBox">
        <div className="sign_up_box_title">
          <h2>달다린 회원가입</h2>
          <p>믿을 수 있는 달달함으로 초대합니다.</p>
        </div>

        <div className="sign_up_box_con">
          {/* 필수 입력사항 */}
          <div className="sign_up_box_detail_1">
            <h3>필수 입력사항</h3>
            <form className="sign_up_form">
              {/* 여기부터 다시 ...  */}
              <dl className="required_data_part_1">
                <div>
                  <dt>이메일</dt>
                  <dd>
                    <input type="email" placeholder="예) daldarin@daldarin.com" required />
                  </dd>
                </div>
                <div>
                  <dt>비밀번호</dt>
                  <dd>
                    <input type="password" placeholder="비밀번호를 입력해주세요." required />
                  </dd>
                </div>
                <div>
                  <dt>비밀번호 확인</dt>
                  <dd>
                    <input type="password" placeholder="비밀번호를 한번 더 입력해주세요." required />
                  </dd>
                </div>
              </dl>

              <dl className="required_data_part_2">
                <div>
                  <dt>이름</dt>
                  <dd>
                    <input type="text" placeholder="이름을 입력해주세요." required />
                  </dd>
                </div>
                <div>
                  <dt>생년월일 6자리</dt>
                  <dd>
                    <input type="number" placeholder="예: 931220" required maxLength={6} />
                  </dd>
                </div>
                <div className="phone_verification_part">
                  <div className="phone_num_check">
                    <dt>휴대폰 번호</dt>
                    <dd>
                      <input type="tel" placeholder="숫자만 입력해주세요." required />
                      <button>인증번호 전송</button>
                    </dd>
                  </div>
                  <div className="phone_verification">
                    <dt>인증번호</dt>
                    <dd>
                      <input type="number" placeholder="인증번호 입력" required />
                      <button>인증번호 확인</button>
                    </dd>
                  </div>
                </div>
                <div className="gender_check_part">
                  <dt>성별</dt>
                  <dd className="gender_options">
                    <div className="gender_option_man">
                      <input id="manBtn" type="radio" value="남성" name="gender"></input>
                      <span>{/* img */}</span>
                      <label htmlFor="manBtn">남성</label>
                    </div>
                    <div className="gender_option_woman">
                      <input id="womanBtn" type="radio" value="여성" name="gender"></input>
                      <span>{/* img */}</span>
                      <label htmlFor="womanBtn">여성</label>
                    </div>
                  </dd>
                </div>
              </dl>
            </form>
          </div>

          {/* 마케팅 활용 및 광고 수신 동의 */}
          <div className="sign_up_box_detail_2">
            <h3>마케팅 활용 및 광고 수신 동의</h3>
            <div className="marketing_agreement">
              <p>
                할인 혜택과 신상품 소식, 이벤트 안내 등<br />
                꼭 필요한 정보를 알려드려요
              </p>
              <div>
                <span>
                  {/* a 태그? Link 태그? */}
                  자세히보기
                </span>
              </div>
              <div className="agreement_options">
                <div>
                  <label htmlFor="agreeAll">
                    <input 
                      id="agreeAll"
                      type="checkbox" 
                      value="모두동의" 
                      name="agreement" 
                      onClick={agreeAll}
                    />
                    <span className="blind">모두동의</span>
                  </label>
                </div>
                <div>
                  <label htmlFor="messageAgreed">
                    <input id="messageAgreed" type="checkbox" value="문자메세지" name="agreement" />
                    <span></span>
                    문자메세지
                  </label>
                </div>
                <div>
                  <label htmlFor="kakaoAgreed">
                    <input id="kakaoAgreed" type="checkbox" value="카카오톡" name="agreement" />
                    <span></span>
                    카카오톡
                  </label>
                </div>
                <div>
                  <label htmlFor="emailAgreed">
                    <input id="emailAgreed" type="checkbox" value="이메일" name="agreement" />
                    <span></span>
                    이메일
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="sign_up_box_submit">
            <button type="submit">달다린 가입하기</button>
            <p>
              본인은 만 14세 이상이며, <span>이용약관</span>, <span>개인정보 수집 및 이용</span>, <br /> 
              <span>개인정보 제공 내용</span>, <span>전자금융거래 약관을 확인 하였으며</span>, 동의합니다.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default SignUp;
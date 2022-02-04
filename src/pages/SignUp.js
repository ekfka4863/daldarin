import "../styles/src/SignUp.scss";

function SignUp() {

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
            <div className="sign_up_form">
              {/* 여기부터 다시 ...  */}
              <dl className="required_data_part_1">
                <div>
                  <dt>이메일</dt>
                  <dd>
                    <input type="email" value="" placeholder="예) daldarin@daldarin.com" required />
                  </dd>
                </div>
                <div>
                  <dt>비밀번호</dt>
                  <dd>
                    <input type="password" value="" placeholder="비밀번호를 입력해주세요." required />
                  </dd>
                </div>
                <div>
                  <dt>비밀번호 확인</dt>
                  <dd>
                    <input type="password" value="" placeholder="비밀번호를 한번 더 입력해주세요." required />
                  </dd>
                </div>
              </dl>

              <dl className="required_data_part_2">
                <div>
                  <dt>이름</dt>
                  <dd>
                    <input type="text" value="" placeholder="이름을 입력해주세요." required />
                  </dd>
                </div>
                <div>
                  <dt>생년월일 6자리</dt>
                  <dd>
                    <input type="number" value="" placeholder="예: 931220" required maxLength={6} />
                  </dd>
                </div>
                <div className="phone_verification_part">
                  <div className="phone_num_check">
                    <dt>휴대폰 번호</dt>
                    <dd>
                      <input type="tel" value="" placeholder="숫자만 입력해주세요." required />
                      <button>인증번호 전송</button>
                    </dd>
                  </div>
                  <div className="phone_verification">
                    <dt>인증번호</dt>
                    <dd>
                      <input type="number" value="" placeholder="인증번호 입력" required />
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
            </div>
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
                <span>자세히보기</span>
              </div>
              <div className="agreement_options">
                <div>
                  <input 
                    id="agreeAll"
                    type="checkbox" 
                    value="모두동의" 
                    name="agreement" 
                    onClick={agreeAll}
                  />
                  <label htmlFor="agreeAll">
                    {/* <span className="blind"></span> */}
                    모두동의
                  </label>
                </div>
                <div>
                  <input id="messageAgreed" type="checkbox" value="문자메세지" name="agreement" />
                  <label htmlFor="messageAgreed">문자메세지</label>
                </div>
                <div>
                  <input id="kakaoAgreed" type="checkbox" value="카카오톡" name="agreement" />
                  <label htmlFor="kakaoAgreed">카카오톡</label>
                </div>
                <div>
                  <input id="emailAgreed" type="checkbox" value="이메일" name="agreement" />
                  <label htmlFor="emailAgreed">이메일</label>
                </div>
              </div>
            </div>
          </div>

          <div className="sign_up_box_submit">
            <button type="submit">달다린 가입하기</button>
            <p>
              본인은 만 14세 이상이며, 이용약관, 개인정보 수집 및 이용, <br /> 
              개인정보 제공 내용, 전자금융거래 약관을 확인 하였으며, 동의합니다.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default SignUp;
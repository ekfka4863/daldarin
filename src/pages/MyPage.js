import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link, withRouter } from "react-router-dom";


// style 
import "../styles/src/MyPage.scss"


function MyPage () {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  const onClickLogOut = () => {
    // 로그아웃 되면, 무조건 메인 페이지로 다시 가게 할 것!
    
    // (loggedIn === false) {}


  };  


  return (
    <>
      {/* <div>마이페이지....</div> */}
      <div id="myPageBox">
        <h2>
          <span className="blind">고객님의 회원정보를 수정할 수 있는 마이페이지입니다.</span>
        </h2>
        <section className="my_page_box_con">
          <h3>회원정보 수정</h3>
          <div className="membership_information_table">
            <table>
              <caption>
                <span className="blind">하단의 테이블에서 고객님의 정보들을 확인 및 수정해주세요.</span>
              </caption>
              <tbody>
                <tr className="table_row_1">
                  <th>아이디</th>
                  {/* <th></th> */}
                  <td colSpan={3}>{/* 회원 아이디 api에서 받아온 걸로 바인딩하기 */}user1@gmail.com</td>
                  {/* <td></td> */}
                </tr>
                <tr className="table_row_2">
                  <th>이메일</th>
                  <td colSpan={3}>{/* 회원 이메일 api에서 받아온 걸로 바인딩하기 */}user1@gmail.com</td>
                </tr>
                <tr className="table_row_3">
                  <th>이름</th>
                  <td>{/* 회원 이름 api에서 받아온 걸로 바인딩하기 */}박유저</td>
                  <th>등급</th>
                  <td className="membership_status">
                    {/* 회원 등급 api에서 받아온 걸로 바인딩하기 */}
                    <span>그린</span>
                    <span>
                      <Link to="/benefit">Green</Link>
                    </span>
                  </td>
                </tr>
                
                <tr className="table_row_4">
                  <th>생년월일</th>
                  <td>{/* 회원 생년월일 api에서 받아온 걸로 바인딩하기 */}991010</td>
                  <th>성별</th>
                  <td>{/* 회원 성별 api에서 받아온 걸로 바인딩하기 */}여성</td>
                </tr>
                <tr className="table_row_5">
                  <th>휴대폰 번호</th>
                  <td colSpan={3}>
                    <div>{/* 회원 성별 api에서 받아온 걸로 바인딩하기 */}01012345678</div>
                    <form>
                      <div>
                        <input type="number" placeholder="변경할 휴대폰 번호를 입력해주세요." />
                        <label><span className="blind">휴대폰 번호 입력란</span></label>
                      </div>
                      <div>
                        <button>휴대폰 번호 변경</button>
                      </div>
                    </form>
                  </td>
                </tr>
                <tr className="table_row_6">
                  <th>비밀번호 변경</th>
                  <td colSpan={3}>
                    <form>
                      <div>
                        <label htmlFor="">현재 비밀번호</label>
                        <input type="password" />
                      </div>
                      <div>
                        <label htmlFor="">새 비밀번호</label>
                        <input type="password" />
                      </div>
                      <div>
                        <label htmlFor="">비밀번호 다시입력</label>
                        <input type="password" />
                      </div>
                      <div>
                        <button>비밀번호 변경</button>
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </section>
      </div>
    </>
  )
}


export default MyPage;
import "../styles/src/FindPw.scss";


function FindPw () {
  return (
    <div id="findPwBox">
      <h2 className="blind">비밀번호 찾기 페이지입니다.</h2>
      
      <div className="find_pw_box_detail">
        <h3>비밀번호 찾기</h3>
        <form>
          <div>
            <label htmlFor="userName">이름</label>
            <input id="userName" type="text" value="" name="user__Name" placeholder="고객님의 이름을 입력해주세요." required />
          </div>
          <div>
            <label htmlFor="userId">아이디</label>
            <input id="userId" ype="text" value="" name="user__Id" placeholder="등록하신 아이디를 입력해주세요." required />
          </div>
          <div>
            <label htmlFor="userEmail">이메일</label>
            <input id="userEmail" type="email" value="" name="user__Email" placeholder="등록하신 이메일 주소를 입력해주세요." required />
          </div>
          <div>
            <button type="submit">확인</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FindPw;
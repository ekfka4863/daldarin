// import "../styles/src/Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footBox">
      <h2>
        <span className="blind">달다린 감귤 팩토리</span>
      </h2>
      <div className="footer_top">
        <h3>
          <span className="blind">회사 정보</span>
        </h3>
        <div className="footer_top_inner_1">
          <h4>달다린 고객센터</h4>
          <span className="blind">입니다. 상담을 원하시면</span>
          <span className="cs_center_phone_num">1899-2116</span>
          <span className="blind">으로 다음 안내 시간에 맞춰서 전화 주시면 감사하겠습니다.</span>
          <dl>
            <dt>평일</dt> 
            <dd>오전 10시 ~ 오후 5시</dd> 
            <dt>점심시간</dt> 
            <dd>오전 12시 ~ 오후 1시</dd> 
            <dd>주말/공휴일 휴무</dd>
          </dl>
        </div>
        <address className="footer_top_inner_2">
          <h4>농업회사법인 주식회사 레아</h4>
          <p className="company_address">주소. 제주특별자치도 서귀포시 안덕면 신화역사로 887-17 달다린 감귤팩토리(우 : 63525)</p>
          <p className="company_detail_info">
            <span>대표자. 김한상</span>
            <span>E-mail. rhea_jeju@naver.com</span> 
            <span>Fax. 0303-3446-2119</span>
            <span>사업자 등록번호. 638-88-01777</span>
            <span>통신판매업신고. 제 2021-안덕-0067호</span>
          </p>
        </address>
      </div>
      <div className="footer_bottom">
        <ul className="footer_bottom_detail">
          {/* <Link>로 바꿔주기 */}
          <li><a href="#">개인정보 처리방침</a></li>
          <li><a href="#">이용약관</a></li>
          <li><a href="#">이메일 무단 수집 거부</a></li>
          <li><a href="#">고객센터 바로가기</a></li>
        </ul>
        <ul className="family_site">
          <li><a href="#">패밀리사이트</a></li>
          {/* <li><a href="#">패밀리사이트</a></li>
          <li><a href="#">패밀리사이트</a></li>
          <li><a href="#">패밀리사이트</a></li>
          <li><a href="#">패밀리사이트</a></li>
          <li><a href="#">패밀리사이트</a></li> */}
        </ul>
      </div>
      <div className="footer_sns">
        <a href="https://www.instagram.com/daldarin_rhea/" target="_blank"></a>
      </div>
    </footer>
  )
}


export default Footer;

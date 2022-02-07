import "../styles/src/Benefit.scss";

// img 
import DaldarinPointsImg1 from "../assets/img/benefit/benefit_point_icon01.png";
import DaldarinPointsImg2 from "../assets/img/benefit/benefit_point_icon02.png";
import DaldarinPointsImg3 from "../assets/img/benefit/benefit_point_icon03.png";


function Benefit() {
  return (
    <>
      {/* <div>Benefit 컴포넌트 입니다</div> */}
      <div id="benefitBox">
        <h2>
          <span className="blind">달다린 혜택안내 페이지입니다.</span>
        </h2>
        <section className="benefit_box_con">
          <h3>달다린 혜택안내</h3>
          <div className="benefit_box_table">
            <table>
              <caption>
                <span className="blind">달다린 혜택안내 등급별 상세 내용</span>
              </caption>
              <tbody>
                <tr className="table_row_1">
                  <th>등급</th>
                  <td>
                    <div>
                      <span>Green</span>
                      <span>그린</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Silver</span>
                      <span>실버</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Gold</span>
                      <span>골드</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Platinum</span>
                      <span>플래티넘</span>
                    </div>
                  </td>
                </tr>
                <tr className="table_row_2">
                  <th>기준</th>
                  <td>회원가입한 모든 회원</td>
                  <td>총 누적 결제금액 <b>10만원 이상</b></td>
                  <td>총 누적 결제금액 <b>30만원 이상</b></td>
                  <td>총 누적 결제금액 <b>50만원 이상</b></td>
                </tr>
                <tr className="table_row_3">
                  <th>혜택</th>
                  <td>달다린 <b>웰컴 쿠폰</b> 세트</td>
                  <td>매 결제마다 결제금액의 <b>1% 포인트 적립</b></td>
                  <td>매 결제마다 결제금액의 <b>2% 포인트 적립</b></td>
                  <td>매 결제마다 결제금액의 <b>3% 포인트 적립</b></td>
                </tr>
                <tr className="table_row_4">
                  <th>적립금</th>
                  <td colSpan={4} className="daldarin_points">
                    <div>
                      <div className="daldarin_points_img_1">
                        <img src={DaldarinPointsImg1} alt="달다린 등급별 혜택 이미지 1" />
                      </div>
                      <div>
                        <b>텍스트 리뷰 작성 시</b><br />
                        <span className="emphasized_points">200</span>
                        포인트 적립
                      </div>
                    </div>
                    <div>
                      <div className="daldarin_points_img_2">
                        <img src={DaldarinPointsImg2} alt="달다린 등급별 혜택 이미지 2" />
                      </div>
                      <div>
                        <b>포토 리뷰 작성 시</b><br />
                        <span className="emphasized_points">250</span>
                        포인트 적립
                      </div>
                    </div>
                    <div>
                      <div className="daldarin_points_img_3">
                        <img src={DaldarinPointsImg3} alt="달다린 등급별 혜택 이미지 3" />
                      </div>
                      <div>
                        <b>등급별 결제금액의</b><br />
                        <span className="emphasized_points">n%</span>
                        포인트 적립
                      </div>
                    </div>
                  </td>
                  {/* <td className="daldarin_points"></td>
                  <td className="daldarin_points"></td>
                  <td className="daldarin_points"></td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}

export default Benefit;
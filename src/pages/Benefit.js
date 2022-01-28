import "../styles/src/Benefit.scss";


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
                  <td>달다린 <b>웹컴 쿠폰</b> 세트</td>
                  <td>매 결제마다 결제금액의 <b>1% 포인트 적립</b></td>
                  <td>매 결제마다 결제금액의 <b>2% 포인트 적립</b></td>
                  <td>매 결제마다 결제금액의 <b>3% 포인트 적립</b></td>
                </tr>
                <tr className="table_row_4">
                  <th>적립금</th>
                  <td colspan="4" className="daldarin_points">
                    <dl>
                      <dt>{/* 이미지 삽입 */}</dt>
                      <dd>
                        <span>텍스트 리뷰 작성 시</span>
                        <span>200</span>
                        <span>포인트 적립</span>
                      </dd>
                    </dl>
                    <dl>
                      <dt>{/* 이미지 삽입 */}</dt>
                      <dd>
                        <span>포토 리뷰 작성</span>
                        <span>250</span>
                        <span>포인트 적립</span>
                      </dd>
                    </dl>
                    <dl>
                      <dt>{/* 이미지 삽입 */}</dt>
                      <dd>
                        <span>등급별 결제금액의</span>
                        <span>n%</span>
                        <span>포인트 적립</span>
                      </dd>
                    </dl>
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

export default Benefit;
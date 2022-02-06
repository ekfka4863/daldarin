import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// styling 
import "../styles/src/Story.scss";

// [img]
// tab menu image - 1
import tabMenuCon1DdImg1 from "../assets/img/story/story_con02_size_img01.png";
import tabMenuCon1DdImg2 from "../assets/img/story/story_con02_size_img02.png";
import tabMenuCon1DdImg3 from "../assets/img/story/story_con02_size_img03.png";
import tabMenuCon1DdImg4 from "../assets/img/story/story_con02_size_img04.png";
import tabMenuCon1DdImg5 from "../assets/img/story/story_con02_size_img05.png";
import tabMenuCon1DdImg6 from "../assets/img/story/story_con02_size_img06.png";

// tab menu image - 3 
import tabMenuCon3Img1 from "../assets/img/story/story_con02_type_img01.png";
import tabMenuCon3Img2 from "../assets/img/story/story_con02_type_img02.png";

function Story () {
  // ============================================
  // useState로 관리하는 state들
  const [viewBoxTextIdx, setViewBoxTextIdx] = useState(0);

  // ============================================
  // [map 함수에 사용된 data들]
  const viewBoxH4 = [
    "우리는 '귤 맛잘알'입니다.",
    "그래서 우리는 맛있는 귤을 그 누구보다 잘 알고 있습니다.",
    "맛있는 귤의 가치를 소비자와 농민들과 나누고 싶습니다.",
  ];
  const viewBoxP1 = [
    "우리는 제주농업 전문가(母會社:제우스)로",
    "농민에게 타이벡 농법을 독점적으로 보급하는 것부터 시작해",
    "농민이 맛있는 귤을 만든 가치를 인정받고 소비자가 그 가치를",
  ];
  const viewBoxP2 = [
    "맛있고 품질 좋은 감귤을 위해 농사부터 시작했습니다.",
    "농자재 유통, 스마트팜 사업으로  고품질 농산물 생산을 지원해 왔습니다.",
    "인정한 소비를 할 수 있는 곳, 그것이 달다린의 비젼입니다."  
  ];

  // tab menu con_1 dt
  const tabMenuCon1Dt = [
    "대과(2L)",
    "로얄중과(L)",
    "로얄소과(M)",
    "로얄소과(S)",
    "로얄소과(2S)",
    "골프공"
  ]; 

  // tab menu con_1 dd - images 
  const tabMenuCon1Dd = [
    tabMenuCon1DdImg1,
    tabMenuCon1DdImg2,
    tabMenuCon1DdImg3,
    tabMenuCon1DdImg4,
    tabMenuCon1DdImg5,
    tabMenuCon1DdImg6
  ]; 

  // tab menu con_2 li - brix 
  const tabMenuCon2Li = [
    "8", "9", "10", "11", "12", "13"
  ]; 

  // ============================================
  // [tab menu]
  const [currentTab, setCurrentTab] = useState(0);

  const tabMenuArr = [
    {
      name: "달다린 감귤 사이즈",
      content: "content 1"
    }, 
    {
      name: "달다린 감귤 당도",
      content: "content 2"
    }, 
    {
      name: "달다린 감귤 종류",
      content: "content 3"
    } 
  ];

  const switchTabMenu = (index) => {
    setCurrentTab(index);
  };
  // reference: https://miracleground.tistory.com/entry/react-Css-in-JS-tab%EB%A9%94%EB%89%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A0%81%EC%9A%A9-%ED%83%AD%EB%A9%94%EB%89%B4
  // ============================================

    
  return (
    <>
      <div id="storyBox">
        <h2>
          <span className="blind">달다린 스토리 페이지입니다.</span>
        </h2>

        {/* .story_box_1 */}
        <section className="story_box_1">
          <h3>
            <span className="blind">저희 달다린이 고객님들께 약속드립니다.</span>
          </h3>
          
          <div className="story_box_1_con">
            <div className="story_box_video">
              <video muted autoPlay loop playsInline>
                <source src="../assets/video/daldarin_story_bg_video.mp4" type="video/mp4" />
                <source src="https://www.daldarin.com/img/file/story_video_20220106.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="story_box_text">
              <h4>
                {/* 3가지 문구가 자동으로 바뀜... 
                  -> transition 효과 나중에 추가!?!
                */}
                {viewBoxH4[viewBoxTextIdx]} 
              </h4>
              <p>
                {/* 3가지 문구가 자동으로 바뀜... 
                  -> transition 효과 나중에 추가!?!
                */}
                {viewBoxP1[viewBoxTextIdx]}
                <br />
                {viewBoxP2[viewBoxTextIdx]}
              </p>
            </div>
          </div>
        </section>

        {/* .story_box_2 */}
        <section className="story_box_2">
          <h3>
            달다린은 달콤한 제주 과일들을 크기와 당도를 <br/>
            세밀하게 구분해 여러분께 선보일 거예요.
          </h3>

          <div className="story_box_2_tab_menu">
            {/* 탭메뉴 */}
            <div className="tab_menu_inner">
              <div className="tab_menu_title">
                <ul>
                  {
                    tabMenuArr.map((elem, index) => {
                      return (
                        <>
                          <li
                            key={index}
                            className={(currentTab === index) ? "tab_menu_title_focused" : "tab_menu_title_li"}
                            onClick={() => switchTabMenu(index)}
                          >
                            {elem.name}
                          </li>
                        </>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="tab_menu_con">
                <ul>
                  {
                    tabMenuArr.map((elem, index) => {
                      return (
                        <>
                          <li
                            key={index}
                            className={(currentTab === index) ? "tab_menu_detail_focused" : "tab_menu_detail"}
                            onClick={() => switchTabMenu(index)}
                          >
                            {
                              // index가 0일때 
                              (index === 0) 
                              ? 
                                tabMenuCon1Dd.map((elem, idx) => {
                                  return (
                                    <div className="con_1_wrapper">
                                      <img src={tabMenuCon1Dd[idx]}></img>
                                      <div>{tabMenuCon1Dt[idx]}</div>
                                    </div>
                                  )
                                })
                              : 
                                null
                            }
                            <div className="gradation_bg" style={(currentTab === 1) ? {display: "block"} : {display: "none"}}>
                            {
                              // index가 1일때 
                              (index === 1) 
                              ? 
                                tabMenuCon2Li.map((elem, idx) => {
                                  return (
                                      <div className="con_2_wrapper">
                                        <div style={{opacity: 0.3 + (idx / 8)}}>{elem}</div>
                                      </div>
                                  )
                                })
                                : 
                                null
                              }
                            </div>
                            <div className="con_3_wrapper">
                            {
                              // index가 2일때 
                              (index === 2) 
                              ? 
                                <>
                                  <div className="con_3_detail">
                                    <img src={tabMenuCon3Img1} alt="가정용 - 조금 못생겼지만 맛은 좋아요."></img>
                                    <div className="con_3_detail_text">
                                      <span>가정용</span>
                                      <span>조금 못생겼지만 맛은 좋아요.</span>
                                    </div>
                                  </div>
                                  <div className="con_3_detail">
                                    <img src={tabMenuCon3Img2} alt="선물용 - 선물하기 이쁘고 맛도 좋아요."></img>
                                    <div className="con_3_detail_text">
                                      <span>선물용</span>
                                      <span>선물하기 이쁘고 맛도 좋아요.</span>
                                    </div>
                                  </div>
                                </>
                              : 
                                null
                            }
                            </div>
                          </li>
                        </>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* .story_box_3 */}
        <section className="story_box_3">
          <div className="box_2_con">
            <h3>
              명확한 기준으로 <br/>
              선택의 폭을 넓혀 드릴게요.
            </h3>
            <p>
            우리는 소비자가 다양한 취향을 갖고 있다는 것을 잘 알고 있습니다. <br/>
            농민들을 위해 감귤 시장을 더욱 활성화하려면 소비자의 시선으로 <br/>
            바라보고 고민해야 한다는 것도 잘 알고 있습니다.
            </p>
          </div>
        </section>

        {/* .story_box_4 */}
        <section className="story_box_4">
          <div className="left_side">
            <h3>
              달다린은 명확한 기준으로 <br/>
              좋은 선택을 할 수 있도록 연구했습니다.
            </h3>
            <div className="img_1"></div>
          </div>
          <div className="right_side">
            <div className="img_2"></div>
            <div className="img_3"></div>
          </div>
        </section>

        {/* .story_box_5 */}
        <section className="story_box_5">
          <h3>
            기존 선과 시스템을 보완해 크기를 더 세밀하게 구분하고 <br/>
            당도를 선택할 수 있는 시스템을 구축해 폭넓은 선택지를 드립니다.
          </h3>
          <div className="box_5_bg_img"></div>
        </section>

        {/* .story_box_6 */}
        <section className="story_box_6">
          <h3>
            진짜 달콤한지 , 맛있는지 후기를 찾는 일은 너무 지긋지긋해요!
          </h3>
          <div className="box_6_inner">
            <p>‘맛있다’, ‘달콤하다’는 판매자의 말이 내 입맛에선 아니었을지도 몰라요.</p>
            <div className="box_6_mandarin_img_bg">{/* 귤 이미지 */}</div>
          </div>
        </section>

        {/* .story_box_7 */}
        <section className="story_box_7">
          <h3>내가 원하는 귤, 내가 아는 그 맛</h3>
          <div className="box_7_inner">
            <p>이제 명확한 기준으로 여러분이 원하는 맛을 고르세요.</p>
            <div>
              <Link to="/shopping">지금 주문하기</Link>
            </div>
          </div>
        </section>
      </div>
    
    </>
  )
}


export default Story;
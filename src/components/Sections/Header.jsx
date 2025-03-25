import React from "react";
import styled from "styled-components";
import HeaderImage from "../../assets/images/nuriya3.png";
import QuotesIcon from "../../assets/svg/Quotes";

export default function Header() {
  return (
      <Wrapper id="home" className="bg flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold text" style={{fontSize: "4rem", color: "#fff"}}>Прибыльная реклама для бизнеса</h1>
            <HeaderP className="font13 text2" style={{fontSize: "18px", color: "#fff"}}>
              Помогаю бизнесу находить платежеспособных клиентов через Instagram и Facebook Ads.
            </HeaderP>
            <a href="https://wa.me/996776807961" target="_blank">
              <div className="btns">
                Записаться на консультацию
              </div>
            </a>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img className="radius8 img_fuild" src={HeaderImage} alt="office"/>
            <QuoteWrapper className="flexCenter darkBg radius8 text_push" >
              <QuotesWrapper>
                <QuotesIcon />
              </QuotesWrapper>
              <div>
                <p className="font15 whiteColor">
                  Реклама — это не про траты, а про инвестиции в твой бизнес. Запусти рекламу правильно, и она начнёт работать на тебя!
                </p>
              </div>
            </QuoteWrapper>
          </ImageWrapper>
        </RightSide>
      </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 100px;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    padding-left: 0;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    text-align: center;
    max-width: 100%;
    font-size: 16px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 500px;
  @media (max-width: 960px) {
    width: 80%;
    height: auto;
  }
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;

const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

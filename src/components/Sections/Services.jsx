import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMoneyBill, faBullseye, faUsers, faBolt, faWrench } from '@fortawesome/free-solid-svg-icons';
export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="flex_card">
            <div style={{
              width: "100%",
              maxWidth: "1200px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}>
              {/* Блок для бизнеса */}
              <div style={{
                background: "linear-gradient(135deg, #FF6B6B, #FF9E2C)", // Яркий, но не агрессивный градиент
                borderRadius: "20px",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease-in-out",
              }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                   onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                <h1 style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "20px"
                }}>
                  Для бизнеса
                </h1>
                <p style={{fontSize: "18px", color: "#F9F9F9", marginBottom: "25px"}}>
                  Поможем продвигать ваш продукт с яркими и эффективными рекламными стратегиями.
                </p>
                <h3 style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#F9F9F9",
                  marginBottom: "15px"
                }}>
                  Ваши результаты:
                </h3>
                <ul style={{
                  fontSize: "18px",
                  color: "#F9F9F9",
                  lineHeight: "1.6",
                  paddingLeft: "0",
                  listStyle: "none"
                }}>
                  <li style={{marginBottom: "20px"}}>
                    <FontAwesomeIcon icon={faChartLine}
                                     style={{marginRight: "10px", color: "white", fontSize: "30px"}}/>
                    Привлечение новых клиентов
                  </li>
                  <li style={{marginBottom: "20px"}}>
                    <FontAwesomeIcon icon={faMoneyBill}
                                     style={{marginRight: "10px", color: "white", fontSize: "30px"}}/>
                    Увеличение прибыли
                  </li>
                  <li style={{marginBottom: "20px"}}>
                    <FontAwesomeIcon icon={faBullseye} style={{marginRight: "10px", color: "white", fontSize: "30px"}}/>
                    Повышение узнаваемости бренда
                  </li>
                </ul>
              </div>

              {/* Блок для таргетологов */}
              <div style={{
                background: "linear-gradient(135deg, #00A9E2, #3D82F0)", // Стильный и холодный градиент
                borderRadius: "20px",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease-in-out",
              }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                   onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                <h1 style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "20px"
                }}>
                  Для таргетологов
                </h1>
                <p style={{fontSize: "18px", color: "#F9F9F9", marginBottom: "25px"}}>
                  Развивайтесь как профессионал в области рекламы с высокодоходными проектами.
                </p>
                <h3 style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#F9F9F9",
                  marginBottom: "15px"
                }}>
                  Что вы получите:
                </h3>
                <ul style={{
                  fontSize: "18px",
                  color: "#F9F9F9",
                  lineHeight: "1.6",
                  paddingLeft: "0",
                  listStyle: "none"
                }}>
                  <li style={{marginBottom: "20px"}}>
                    <FontAwesomeIcon icon={faUsers} style={{marginRight: "10px", color: "white", fontSize: "30px"}}/>
                    Четкий алгоритм работы с клиентами
                  </li>
                  <li style={{marginBottom: "20px"}}>
                    <FontAwesomeIcon icon={faBolt} style={{marginRight: "10px", color: "white", fontSize: "30px"}}/>
                    Масштабирование рекламных кампаний
                  </li>
                  <li style={{marginBottom: "20px"}}>
                    <FontAwesomeIcon icon={faWrench} style={{marginRight: "10px", color: "white", fontSize: "30px"}}/>
                    Разбор сложных ситуаций и блокировок
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className="lightBg" style={{marginTop: 200}}>
          <div>
            <Advertising className="flexSpaceCenter">
              <div style={{textAlign: "center"}}>

                <div
                    className="font20"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "rgb(19 84 185)",
                      padding: "30px",
                      color: "#fff",
                      fontStyle: "italic",
                      position: "relative"
                    }}
                >
                  <p style={{fontSize: "4em", color: "#f1b301", position: "absolute", left: 10, top: -34}}>❛❛</p>
                  Реклама – это не трата, а инвестиция.
                  Когда она настроена правильно, каждый вложенный сом превращается в новых клиентов и рост бизнеса.
                  <p style={{fontSize: "4em", color: "#f1b301", position: "absolute", right: 10, bottom: -54}}>❜❜</p>
                </div>

                <br/>
                <div className="container">
                  <p className="font20" style={{fontWeight: "500"}}>
                    <span style={{fontSize: 30}}>🚀</span> Если ты хочешь стабильно получать клиентов, увеличивать прибыль и масштабировать бизнес —
                    таргетированная реклама станет твоим главным инструментом.
                  </p>
                  <br/>
                  <p className="font20" style={{fontWeight: "500"}}>
                    Не просто реклама. А Настоящая система привлечения клиентов!
                  </p>
                </div>
              </div>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;

  p {
    max-width: 475px;
  }

  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }

    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5% auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
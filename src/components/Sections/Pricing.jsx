import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";
import gif from "../../assets/gif/Girl-working-on-business-marketing-strategies.gif"
import FullButton from "../Buttons/FullButton";
export default function Pricing() {
  return (
    <Wrapper id="pricing">
        <div className="container" style={{marginTop: 30}}>
            <h1 className="font40 extraBold" style={{color: "rgb(19, 84, 185)"}}>🚀 Что ты получишь после работы со мной?</h1>
            <div className="dflex">
                <div>
                    <div className="texts" style={{
                        backgroundColor: "rgb(19, 84, 185)",
                        color: "#fff",
                        padding: "30px",
                        borderRadius: 12,
                        marginTop: 30
                    }}>
                        <p>
                            ✅ Постоянный поток клиентов — забудь про «мертвые» охваты и случайные заявки. Твоя реклама
                            будет
                            работать на результат.
                        </p>
                        <p>
                            ✅ Эффективное использование бюджета — никакого слива денег! Только стратегии, которые
                            реально
                            приносят прибыль.
                        </p>
                        <p>
                            ✅ Рост продаж и прибыли — реклама окупается и приносит новых клиентов, а не просто крутится
                            в
                            холостую.
                        </p>
                        <p>
                            ✅ Чёткое понимание маркетинга — даже если ты ничего не знал о рекламе, теперь ты увидишь,
                            как
                            она работает и приносит результаты.
                        </p>
                        <p>
                            🔥 Работаем не ради отчётов, а ради прибыли! 🔥
                        </p>
                        <p>
                            📩 Напиши мне, и давай запустим рекламу, которая приносит клиентов!
                        </p>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div className="btns">
                            Записаться на консультацию
                        </div>
                    </div>
                </div>
                <div>
                    <img src={gif} alt="gif"/>
                </div>
            </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
    width: 100%;
    padding: 50px 0;
`;
const HeaderInfo = styled.div`
    margin-bottom: 50px;
    @media (max-width: 860px) {
        text-align: center;
    }
`;
const TablesWrapper = styled.div`
    @media (max-width: 860px) {
        flex-direction: column;
    }
`;
const TableBox = styled.div`
    width: 31%;
    @media (max-width: 860px) {
        width: 100%;
        max-width: 370px;
        margin: 0 auto
    }
`;





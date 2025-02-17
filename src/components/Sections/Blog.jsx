import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Что входит в работу?</h1>
            <p className="font20" style={{fontWeight: "500", marginTop: 10}}>
              Таргетированная реклама — это не просто «запустить кнопку» в Instagram. Это чёткая стратегия для привлечения клиентов и увеличения продаж.

            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="🔍 Глубокий анализ "
                text="— изучаю твою нишу, целевую аудиторию и конкурентов, чтобы реклама била точно в цель."
                tag=""
                author="Luke Skywalker, 2 days ago"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="🎨 Создание креативов"
                text="— продумываю визуалы и тексты, которые привлекают внимание и вызывают желание купить."
                tag="company"
                author="Luke Skywalker, 2 days ago"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="⚙️ Настройка и запуск рекламы "
                text="— выбираю оптимальные форматы, тестирую аудитории и запускаю кампании."
                tag="company"
                author="Luke Skywalker, 2 days ago"
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="📊 Оптимизация"
                text="— отслеживаю показатели, отключаю неэффективные объявления и усиливаю лучшие варианты."
                tag="company"
                author="Luke Skywalker, 2 days ago"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="🚀 Масштабирование"
                text="— увеличиваю охват и бюджет, чтобы твоя реклама приносила максимум прибыли."
                tag="company"
                author="Luke Skywalker, 2 days ago"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
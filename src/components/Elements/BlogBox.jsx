import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow" style={{backgroundColor: "rgb(19, 84, 185)", height: 180}}>
        <h3 className="font20 extraBold" style={{color: "#fff"}}>{title}</h3>
        <p className="font16" style={{ padding: "30px 0", fontWeight: "500", color: "#fff"}}>
          {text}
        </p>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;

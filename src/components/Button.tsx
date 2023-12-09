import styled from "styled-components";

type ButtonPropsType = {
    typeBtn?: string
}

export const StyleBtn = styled.button<ButtonPropsType>`
  width: 86px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  border: none;
  line-height: 20px;
  font-weight: 700;
  font-size: 10px;
  cursor: pointer;
  margin-right: 12px;
  color: ${props =>(props.typeBtn === "seeMore" ? "#FFF" : "#4E71FE")};
  background-color: ${props => (props.typeBtn === "seeMore" ? "#4E71FE" : "transparent")};
  border: ${props => (props.typeBtn === "seeMore" ? "none" : "2px solid #4E71FE")};
`
import React from 'react';
import styled from "styled-components";
import {StyleBtn} from "./Button";

export const ImageInfo = () => {
    return (
        <StyledImageInfo>
            <CardTitle>Headline</CardTitle>
            <StyledText>
                "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
            </StyledText>
            <StyleBtn typeBtn={"seeMore"}>See more</StyleBtn>
            <StyleBtn >Save</StyleBtn>
        </StyledImageInfo>
    );
};



const StyledImageInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 20px;
`

const CardTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
`

const StyledText = styled.p`
  color: #ABB3BA;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  margin: 20px 0;
`
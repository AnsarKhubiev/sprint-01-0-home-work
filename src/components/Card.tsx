import React from 'react';
import styled from 'styled-components';
import {Image} from "./Image";
import {ImageInfo} from "./ImageInfo";

export const Card = () => {
    return (
        <StyledCard>
            <Image/>
            <ImageInfo/>
        </StyledCard>
    );
};

const StyledCard = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
`


import React from 'react';
import styled from 'styled-components';
import image from '../assets/images/img.webp'

export const Image = () => <StyledImage src={image} alt={'image'}/>;

const StyledImage = styled.img`
  width: 280px;
  height: 170px;
  flex-shrink: 0;
  border-radius: 10px;
  margin: 10px 10px 0 10px;
`
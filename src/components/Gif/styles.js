import styled from "@emotion/styled";
import { Link } from "wouter";

import { 
  breakpoints,
  generateMultiColor,
  generateBoxShadow } from "styles";


export const Gifstyled = styled.article`
  position: relative;
  height: 100%;
  margin-bottom: .5em;

  &:hover,
  &:hover h4 {
    ${generateMultiColor}
    ${generateBoxShadow}
  }

  &:nth-of-type(11n + 1) {
    grid-column: span 2;
    grid-row: span 2;
  }
  &:nth-of-type(8n + 1) {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
  &:nth-of-type(10n + 3) {
    grid-column: span 2;
    grid-row: span 1;
  }

  ${breakpoints.smallerThanDesktop} {
    &:nth-of-type(11n + 1),
    &:nth-of-type(8n + 1),
    &:nth-of-type(10n + 3) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
`;

export const GifButtons = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
`;

export const GifLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  color: #000;
  text-decoration: none;
`;

export const GifTitle = styled.h4`
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 2px;
  font-size: 12px;
  color: #fff;
  background-color: rgba(0, 0, 0, .3);
`;

export const GifImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: inherit;
  vertical-align: top;

  ${generateMultiColor}
`;
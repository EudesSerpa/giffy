import styled from "@emotion/styled";
import { Link } from "wouter";

import { breakpoints } from "styles";


export function generateMultiColor(props) {
  const NEED_WHITE_COLOR = [3, 4];

  const colorIndex = props.index % 5 + 1;
  const needWhite = NEED_WHITE_COLOR.includes(colorIndex);
  const colorText = needWhite ? "#FFF" : "var(--theme-body-bg)";

  return `
    color: ${colorText};
    background-color: var(--brand-color_${colorIndex});
  `;
}

export const CategoryTitle = styled.h3`
  color: var(--theme-body-txt);
  font-weight: bold;

  ${breakpoints.greaterThanMobile} {
    text-align: right;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style-position: inside;

  ${breakpoints.greaterThanMobile} {
    justify-content: flex-end;
  }
`;

export const CategoryListItem = styled.li`
  padding: 0.3rem;
	margin: 0.2rem;
  font-size: 1.2rem;
  list-style: none;
  
  ${generateMultiColor}  

  &:hover a {
    transform: scale(1.1);
  }

  ${breakpoints.greaterThanMobile} {
    margin-rigth: .5em;
  }
`;

export const CategoryLink = styled(Link)`
  display: inline-block;
  padding: 0 10px;
  color: inherit;
  font-size: 1em;
  transition: color .1s ease-in;
`;
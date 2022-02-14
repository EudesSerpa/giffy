import styled from "@emotion/styled";
import { Link } from "wouter";

import { breakpoints, generateMultiColor } from "styles";

export const CategoryTitle = styled.h3`
  margin-top: 2rem;
  color: var(--theme-body-txt);
  font-weight: bold;

  ${breakpoints.greaterThanTablet} {
    text-align: right;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: -0.75rem 0 0;
  list-style-position: inside;

  ${breakpoints.greaterThanTablet} {
    justify-content: flex-end;
  }
`;

export const CategoryListItem = styled.li`
  padding: 0.3rem;
  margin: 0.2rem;
  font-size: 1.2rem;
  list-style: none;
  border-radius: 4px;

  ${generateMultiColor}

  &:hover a {
    transform: scale(1.1) translateY(-1px);
  }

  ${breakpoints.greaterThanTablet} {
    margin-rigth: 0.5em;
  }
`;

export const CategoryLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  color: inherit;
  font-size: 1em;
  transition: color 0.1s ease-in;
`;

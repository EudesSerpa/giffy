import React from "react";

import {
  CategoryTitle,
  CategoryList,
  CategoryListItem,
  CategoryLink,
} from "./styles.js";


function Category({ name, options = [] }) {
  const optionList = options.map((option, index) => (
    <CategoryListItem key={option} index={index}>
      <CategoryLink to={`/search/${option}`}>{option}</CategoryLink>
    </CategoryListItem>
  ));

  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>{optionList}</CategoryList>
    </section>
  );
}

export default Category;
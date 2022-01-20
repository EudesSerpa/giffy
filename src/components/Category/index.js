import React from "react";

import {
  CategoryTitle,
  CategoryList,
  CategoryListItem,
  CategoryLink,
} from "./styles.js";

function Category({ name, options = [] }) {
  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((option, index) => (
          <CategoryListItem key={option} index={index}>
            <CategoryLink to={`/search/${option}`}>{option}</CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
}

export default Category;

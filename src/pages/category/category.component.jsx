import React from "react";

const Category = props => (
  <div>
    <h1>{props.match.params.categoryId.toUpperCase()}</h1>
  </div>
);

export default Category;

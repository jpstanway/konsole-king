import React from "react";
import { connect } from "react-redux";

import { selectCategory } from "../../redux/browse/browse.selectors";

const Item = ({ match, category }) => {
  const item = category.items.find(
    item => Number(match.params.itemId) === item.id
  );
  console.log(item);
  return (
    <div>
      <h2>{item.item}</h2>
      <img src={item.imageUrl} alt="item" />
      <p>${Number(item.price) / 100}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Item);

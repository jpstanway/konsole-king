import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { BrowsePage } from "./browse.styles";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCategoriesSnapshotToMap
} from "../../firebase/firebase.utils";

import { updateCategories } from "../../redux/browse/browse.actions";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCategories } = this.props;
    const categoryRef = firestore.collection("categories");

    this.unsubscribeFromSnapshot = categoryRef.onSnapshot(async snapshot => {
      const categoriesMap = convertCategoriesSnapshotToMap(snapshot);
      updateCategories(categoriesMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    const { match } = this.props;

    return (
      <BrowsePage>
        <h2>Browse</h2>
      </BrowsePage>
    );
  }
}

export default connect(null, { updateCategories })(Browse);

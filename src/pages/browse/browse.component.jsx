import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { BrowsePage, BrowsePageTitle } from "./browse.styles";

import AllCategories from "../../components/all-categories/all-categories.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCategoriesSnapshotToMap
} from "../../firebase/firebase.utils";

import { updateCategories } from "../../redux/browse/browse.actions";

const AllCategoriesWithSpinner = WithSpinner(AllCategories);

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
        <BrowsePageTitle>Browse</BrowsePageTitle>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <AllCategoriesWithSpinner isLoading={loading} {...props} />
          )}
        />
      </BrowsePage>
    );
  }
}

export default connect(null, { updateCategories })(Browse);

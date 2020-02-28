import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import LoginBar from "./components/login-bar/login-bar.component";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import RegisterLogin from "./pages/register-login/register-login.component";
import Browse from "./pages/browse/browse.component";
import User from "./pages/user/user.component";
import Cart from "./pages/cart/cart.component";
import Checkout from "./pages/checkout/checkout.component";
import Footer from "./components/footer/footer.component";
import WithSpinner from "./components/with-spinner/with-spinner.component";

//import collections from "./scripts/collections";

import {
  auth,
  createUserProfileDocument
  //addCategoryAndDocs
} from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

const UserPageWithSpinner = WithSpinner(User);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // keep current user updated
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      // set current user to redux store
      setCurrentUser(userAuth);
      this.setState({ loading: false });
    });

    // add category + items
    //addCategoryAndDocs(collections.title, collections.categories);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <LoginBar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/user"
            render={props => (
              <UserPageWithSpinner isLoading={this.state.loading} {...props} />
            )}
          />
          <Route path="/browse" component={Browse} />
          <Route path="/cart" component={Cart} />
          <Route
            path="/register-login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <RegisterLogin />
            }
          />
          <Route
            exact
            path="/checkout"
            render={() =>
              this.props.currentUser ? (
                <Checkout />
              ) : (
                <Redirect to="/register-login" />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, { setCurrentUser })(App);

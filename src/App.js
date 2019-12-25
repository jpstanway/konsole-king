import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Loginbar from "./components/loginbar/loginbar.component";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import RegisterLogin from "./pages/register-login/register-login.component";
import Footer from "./components/footer/footer.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
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
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Loginbar />
        <Header />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/register-login" render={() => <RegisterLogin />} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user
});

export default connect(mapStateToProps, { setCurrentUser })(App);

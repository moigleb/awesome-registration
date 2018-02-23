import React, {Component} from "react";
import Signin from "../components/auth/signin";
import Signout from "../components/auth/signout";
import Signup from "../components/auth/signup";
import IndexPage from "../components/indexPage";
import Contact from "../components/contact";
import About from "../components/About";
import Support from "../components/support";
import PrivateRoute from "../components/auth/privateroute";
import Protected from "../components/protected";

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Header from "../components/header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <main>
        <Switch>
          <Route path="/" component={IndexPage} exact={true}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/support" component={Support}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/signout" component={Signout}/>
          <PrivateRoute path="/protected" component={Protected}/>
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default AppRouter;
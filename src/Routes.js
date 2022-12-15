import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Modules/Home/Home";
import About from "./Modules/About/About";
import Blog from "./Modules/Blog/Blog";
import Pricing from "./Modules/Price/Pricing";
import Contactus from "./Modules/Contactus/Contactus";
import Login from "./Modules/Login/Login";
import Meeting from "./Modules/Meeting/Meeting";
import Confirmyourdetails from "./Modules/Meeting/Components/Confirmyourdetails/Confirmyourdetails";
import PostCard from "./Modules/Common/postCard/PostCard";
import Post from "./Modules/Common/Post/Post";
import RelatePosts from "./Modules/Blog/Components/RelatePosts/RelatePosts"
import Signup from "./Modules/Signup/Signup";
import UserSignup from "./Modules/Signup/Components/userSignup/UserSignup";
import ForgetPassword from "./Modules/ForgetPassword/ForgetPassword";
// import { Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";

function Routes() {
  // const { authorization } = useSelector((state) => state.authorization);
  // const isAuth = authorization.id ? true : false;
  return (
    <Route
      render={({ location }) => (
        <Switch location={location}>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/aboutus" render={() => <About />} />
          <Route path="/blog" render={() => <Blog />} />
          <Route path="/pricing" render={() => <Pricing />} />
          <Route path="/contactus" render={() => <Contactus />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/meeting" render={() => <Meeting />} />
          <Route path="/Confirmyourdetails" render={() => <Confirmyourdetails />} />
          <Route path="/postcard" render={() => <PostCard />} />
          <Route path="/post" render={() => <Post />} />
          <Route path="/postdetails" render={() => <RelatePosts />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/userSignup" render={() => <UserSignup />} />
          <Route path="/forgotPassword" render={() => <ForgetPassword />} />
        </Switch>
      )}
    />
  );
}

export default Routes;

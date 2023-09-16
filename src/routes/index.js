import React from "react";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Followers from "../pages/followers";
import Followings from "../pages/followings";
import Sidebar from "../layouts/sidebar";
import Login from "../pages/login";

const AllRoutes = [
  //  Home Routes
  {
    name: "Home",
    path: "/",
    element: Home,
  },
  //   Profile Routes
  {
    name: "Profile",
    path: "/profile",
    element: Profile,
  },
  //   Follower Routes

  {
    name: "Followers",
    path: "/followers",
    element: Followers,
  },
  //   Following Routes

  {
    name: "Followings",
    path: "/followings",
    element: Followings,
  },
  {
    name: "Sidebar",
    path: "//sidebar",
    element: Sidebar,
  },
  {
    name: "Login",
    path: "/login",
    element: Login,
  },
];

export default AllRoutes;

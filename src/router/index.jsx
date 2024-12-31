import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home/index";
import About from "../views/about/index";
import NavCom from "../components/nav";
import Team from "../views/about/team";
import History from "../views/about/history";
import BlogPost from "../views/blog";
import Dashboard from "../views/dashboard/index";

const dashboardLoader = () => {
  // TODO
};

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* 嵌套路由，父组件要配合Outlet组件使用，用来渲染嵌套路由 */}
        <Route path="/about" element={<About />}>
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/history" element={<History />} />
        </Route>

        {/* 动态路由 */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* 路由守卫: loader函数用于在进入路由之前执行某些守卫逻辑 */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
          loader={dashboardLoader}
        />
      </Routes>
      <NavCom></NavCom>
    </Router>
  );
};

export default MyRouter;

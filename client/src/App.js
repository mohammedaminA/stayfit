import React from "react";
import "./App.css";
// import Scheduler from './Components/Scheduler.jsx';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MySchedule from "./Pages/MySchedule";
import SharedSchedule from "./Pages/SharedSchedule";
import Layout from "./Components/Layout.jsx";

export default function App() {
  const [loginState, setLoginState] = React.useState(false);

  const checkLoginState = () => {
    const login = localStorage.getItem("login");
    setLoginState(login ?? false);
  };

  React.useEffect(() => {
    checkLoginState();
  }, []);

  return (
    <Router>
      <Layout loginState={loginState}>
        <Routes>
          <Route
            exact
            path={"/"}
            element={
              <HomePage
                checkLoginState={checkLoginState}
                loginState={loginState}
              />
            }
          />
          <Route
            exact
            path={"/login"}
            element={
              <Login
                checkLoginState={checkLoginState}
                loginState={loginState}
              />
            }
          />
          <Route
            exact
            path={"/register"}
            element={
              <Register
                checkLoginState={checkLoginState}
                loginState={loginState}
              />
            }
          />
          <Route
            exact
            path={"/my-schedule"}
            element={
              <MySchedule
                checkLoginState={checkLoginState}
                loginState={loginState}
              />
            }
          />
          <Route
            exact
            path={"/share-schedule/:id"}
            element={
              <SharedSchedule
                checkLoginState={checkLoginState}
                loginState={loginState}
              />
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

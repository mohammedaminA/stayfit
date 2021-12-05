import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { loginState } = props;
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    if (loginState) {
      localStorage.clear();
      window.location = "/";
    }
  };

  return (
    <div className="navbar">
      <h1 style={{ textTransform: "uppercase" }}>
        <span style={{ color: "red" }}>Stay</span> Fit{" "}
      </h1>
      <div className="links">
        <Link exact to="/">
          Home
        </Link>
        {!loginState && (
          <>
            <Link exact to="/login">
              Login
            </Link>
            <Link exact to="/register">
              Signup
            </Link>
          </>
        )}

        {loginState && (
          <>
            <Link exact to="/my-schedule">
              Your <span style={{ color: "red" }}>Fitness</span> Schedule
            </Link>
            <Link exact to="/" onClick={logout}>
              Logout
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

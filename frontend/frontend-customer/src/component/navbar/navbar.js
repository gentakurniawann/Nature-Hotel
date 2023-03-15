import React from "react";
import "./styles.css";
import Media from "../media/media";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      token: "",
      isLogin: false,
    };
    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token");
    }
  }
  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };
  getCustomerLogin = () => {
    if (this.state.token !== "") {
      this.setState({
        isLogin: true,
      });
    } else {
      this.setState({
        isLogin: false,
      });
    }
  };

  componentDidMount = () => {
    this.getCustomerLogin();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            N
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/room">
                  Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  Booking
                </Link>
              </li>
              {this.state.isLogin === true ? (
                <Link
                  to="/profile"
                  style={{ marginLeft: "52px" }}
                  className="profile"
                >
                  <Media value image="icon-profile.svg"></Media>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-login">Login</button>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

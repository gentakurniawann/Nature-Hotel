import React from "react";
import axios from "axios";
import Media from "../../component/media/media";
import "./styles.css";
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    let url = "http://localhost:2604/customer/auth";
    axios.post(url, data).then((res) => {
      if (res.data.logged) {
        let nama_customer = res.data.data.nama_customer;
        let id_customer = res.data.data.id_customer;
        let nik = res.data.data.nik;
        let email = res.data.data.email;
        let foto = res.data.data.foto;
        let customer = res.data.data;
        let token = res.data.token;
        localStorage.setItem("nama_customer", nama_customer);
        localStorage.setItem("id_customer", id_customer);
        localStorage.setItem("nik", nik);
        localStorage.setItem("email", email);
        localStorage.setItem("customer", JSON.stringify(customer));
        localStorage.setItem("foto", foto);
        localStorage.setItem("token", token);
        window.location = "/";
      } else {
        window.alert(res.data.message);
      }
    });
  };
  render() {
    return (
      <section className="login">
        <div className="container-login">
          <div className="row align-items-center">
            <div className="col-6 col-image">
              <div className="image-login">
                <Media value image="login-img.png" width=""></Media>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 content">
              <div className="logo">
                <h1>N</h1>
              </div>
              <form
                className="login-form"
                onSubmit={(e) => this.handleLogin(e)}
              >
                <h1>Login</h1>
                <div className="form-input">
                  <div className="email">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="example@gmail.com"
                      onChange={this.handleChange}
                      value={this.state.email}
                    />
                  </div>
                  <div className="password">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      name="password"
                      placeholder="*******"
                      onChange={this.handleChange}
                      value={this.state.password}
                    />
                  </div>
                </div>
                <div className="form-button">
                  <button className="btn btn-login">Login</button>
                  <p>
                    Don’t have an account?
                    <a href="/register"> Register Now</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

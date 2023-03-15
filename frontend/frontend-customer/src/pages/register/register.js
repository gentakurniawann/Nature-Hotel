import React from "react";
import axios from "axios";
import Media from "../../component/media/media";
import "./styles.css";

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      nama_customer: "",
      nik: "",
      jenis_kelamin: "",
      jkChoice: [{ jk: "L" }, { jk: "P" }],
      email: "",
      password: "",
      foto: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFile = (e) => {
    this.setState({
      foto: e.target.files[0],
    });
  };

  handleRegister = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("nama_customer", this.state.nama_customer);
    form.append("nik", this.state.nik);
    form.append("jenis_kelamin", this.state.jenis_kelamin);
    form.append("email", this.state.email);
    form.append("password", this.state.password);
    form.append("foto", this.state.foto);

    let url = "http://localhost:2604/customer";
    axios
      .post(url, form)
      .then((res) => {
        window.location = "/";
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  render() {
    return (
      <section className="register">
        <div className="container-register">
          <div className="row align-items-center">
            <div className="col-6 col-image">
              <div className="image-register">
                <Media value image="login-img.png"></Media>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 content">
              <div className="logo">
                <h1>N</h1>
              </div>
              <form
                className="register-form"
                onSubmit={(e) => this.handleRegister(e)}
              >
                <h1>Register</h1>
                <div className="form-input">
                  <div className="nama_customer">
                    <label for="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="nama_customer"
                      placeholder="your name"
                      onChange={this.handleChange}
                      value={this.state.nama_customer}
                    />
                  </div>
                  <div className="nik">
                    <label for="nik" className="form-label">
                      NIK
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      name="nik"
                      placeholder="Insert NIK Number"
                      onChange={this.handleChange}
                      value={this.state.nik}
                    />
                  </div>
                  <div className="jenis_kelamin">
                    <label for="jenis_kelamin" className="form-label">
                      Gender
                    </label>
                    <select
                      className="form-control"
                      name="jenis_kelamin"
                      onChange={this.handleChange}
                    >
                      <option>Select Gender</option>
                      {this.state.jkChoice.map((item, index) => {
                        if (item.jk === this.state.jenis_kelamin) {
                          let selected = true;
                          return (
                            <option value={item.jk} selected={selected}>
                              {item.jk}
                            </option>
                          );
                        } else {
                          let selected = false;
                          return (
                            <option value={item.jk} selected={selected}>
                              {item.jk}
                            </option>
                          );
                        }
                      })}
                    </select>
                  </div>
                  <div className="email">
                    <label for="username" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
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
                  <div className="foto">
                    <label for="foto" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control form-control-lg"
                      name="foto"
                      placeholder="Insert your photo"
                      onChange={this.handleFile}
                      value={this.state.Foto}
                      style={{ lineHeight: "32px" }}
                    />
                  </div>
                </div>
                <button className="btn btn-register">Register</button>
                <p>
                  Already have an account?
                  <a href="/login"> Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

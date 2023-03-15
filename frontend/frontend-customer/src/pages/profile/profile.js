import React from "react";
import axios from "axios";
import NavbarColored from "../../component/navbar/navbarColored";
import Footer from "../../component/footer/footer";
import "./styles.css";
export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      customer: [],
      id_customer: "",
      nama_customer: "",
      nik: "",
      jenis_kelamin: "",
      jkChoice: [{ jk: "L" }, { jk: "P" }],
      email: "",
      password: "",
      foto: null,
      fotopreview: "",
      password: "",
      token: "",
    };
    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token");
    } else {
      window.location = "/login";
    }
  }

  logout = () => {
    localStorage.clear();
    window.location = "/";
  };

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

  handleSave = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("nama_customer", this.state.nama_customer);
    form.append("nik", this.state.nik);
    form.append("jenis_kelamin", this.state.jenis_kelamin);
    form.append("email", this.state.email);
    form.append("password", this.state.password);
    form.append("foto", this.state.foto);

    let url = "http://localhost:2604/customer/" + this.state.id_customer;
    axios
      .put(url, form)
      .then((res) => {
        window.history.back();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  getCustomer = () => {
    let id_customer = localStorage.getItem("id_customer");
    let url = "http://localhost:2604/customer/" + id_customer;
    axios
      .get(url)
      .then((res) => {
        this.setState({
          id_customer: localStorage.getItem("id_customer"),
          nama_customer: res.data.customer.nama_customer,
          nik: res.data.customer.nik,
          jenis_kelamin: res.data.customer.jenis_kelamin,
          email: res.data.customer.email,
          password: "",
          foto: null,
          fotopreview:
            "http://localhost:2604/image/customer/" + res.data.customer.foto,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  componentDidMount = () => {
    this.getCustomer();
  };
  render() {
    return (
      <div>
        <NavbarColored />
        <section className="profile-page">
          <div className="container">
            <div className="d-flex justify-content-center">
              <div className="profile-card col-md-10 col-sm-12">
                <h1 className="text-center">Profile</h1>
                <div className="d-flex align-items-center">
                  <div className="image">
                    <img
                      src={this.state.fotopreview}
                      alt={this.state.fotopreview}
                      width="240px"
                      height="240px"
                    />
                  </div>
                  <div>
                    <form
                      className="form-profile"
                      onSubmit={(e) => this.handleSave(e)}
                    >
                      <div className="name">
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
                          required
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
                          placeholder="Input NIK"
                          onChange={this.handleChange}
                          value={this.state.nik}
                          required
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
                          required
                        />
                      </div>
                      <div className="password">
                        <label for="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="password"
                          placeholder="*******"
                          onChange={this.handleChange}
                          value={this.state.password}
                        />
                      </div>
                      <div className="foto">
                        <label for="foto" className="form-label">
                          Photo Profile
                        </label>
                        <input
                          type="file"
                          name="foto"
                          className="form-control form-control-lg"
                          onChange={this.handleFile}
                          value={this.state.Foto}
                          style={{ lineHeight: "32px" }}
                        />
                      </div>
                      <button className="btn btn-saveProfile" type="submit">
                        Save Profile
                      </button>
                    </form>
                    <button
                      className="btn btn-logout"
                      onClick={() => this.logout()}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

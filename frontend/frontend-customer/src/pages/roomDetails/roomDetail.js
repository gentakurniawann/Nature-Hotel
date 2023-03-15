import React from "react";
import axios from "axios";
import NavbarColored from "../../component/navbar/navbarColored";
import Footer from "../../component/footer/footer";
import { withRouter } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";
import "./styles.css";
export default class RoomDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      tipe_kamar: [],
      pemesanan: [],
      user: [],
      id_tipe_kamar: "",
      nama_tipe_kamar: "",
      harga: 0,
      deskripsi: "",
      foto: "",
      id_user: "",
      id_customer: "",
      nomor_pemesanan: 0,
      tgl_pemesanan: "",
      tgl_check_in: "",
      tgl_check_out: "",
      nama_tamu: "",
      jumlah_kamar: 0,
      token: "",
      isModalOpen: false,
    };
    this.state.token = localStorage.getItem("token");
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleBook = () => {
    if (this.state.token !== null) {
      let date = new Date().toLocaleString() + "";
      this.setState({
        isModalOpen: true,
        id_customer: (this.state.token = localStorage.getItem("id_customer")),
        id_tipe_kamar: this.props.match.params.id,
        nomor_pemesanan: this.state.pemesanan.count + 1,
        tgl_pemesanan: date,
        tgl_check_in: "",
        tgl_check_out: "",
        nama_tamu: "",
        jumlah_kamar: "",
      });
    } else {
      window.location = "/login";
    }
  };

  handleSave = (e) => {
    e.preventDefault();
    let data = {
      id_user: this.state.id_user,
      id_customer: this.state.id_customer,
      id_tipe_kamar: this.state.id_tipe_kamar,
      nomor_pemesanan: this.state.nomor_pemesanan,
      tgl_pemesanan: this.state.tgl_pemesanan,
      tgl_check_in: this.state.tgl_check_in,
      tgl_check_out: this.state.tgl_check_out,
      nama_tamu: this.state.nama_tamu,
      jumlah_kamar: this.state.jumlah_kamar,
    };
    let url = "http://localhost:2604/pemesanan";
    axios
      .post(url, data, this.headerConfig())
      .then((res) => {
        window.location = "/booking";
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  getIdResepsionis = () => {
    let url = "http://localhost:2604/user/find/resepsionis";
    axios
      .get(url)
      .then((res) => {
        this.setState({
          id_user: res.data.user.id_user,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  getPemesanan = () => {
    let url = "http://localhost:2604/pemesanan";
    axios
      .get(url)
      .then((res) => {
        this.setState({
          pemesanan: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  getRoomType = (id) => {
    let url = "http://localhost:2604/tipe_kamar/" + id;
    axios
      .get(url)
      .then((res) => {
        this.setState({
          tipe_kamar: res.data.tipe_kamar,
          id_tipe_kamar: res.data.tipe_kamar.id_tipe_kamar,
          nama_tipe_kamar: res.data.tipe_kamar.nama_tipe_kamar,
          harga: res.data.tipe_kamar.harga,
          deskripsi: res.data.tipe_kamar.deskripsi,
          foto:
            "http://localhost:2604/image/tipe_kamar/" +
            res.data.tipe_kamar.foto,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.getRoomType(id);
    this.getPemesanan();
    this.getIdResepsionis();
  };
  render() {
    return (
      <div>
        <NavbarColored />
        <section className="roomDetail-page">
          <div className="container">
            <h1 className="text-center">{this.state.nama_tipe_kamar}</h1>
            <div style={{ marginBottom: "40px" }}>
              <img
                src={this.state.foto}
                width="100%"
                style={{ borderRadius: "16px", maxHeight: "500px" }}
              />
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ gap: "24px", flexWrap: "wrap" }}
            >
              <div className="description" style={{ maxWidth: "750px" }}>
                <h3>Description</h3>
                <p>{this.state.deskripsi}</p>
              </div>
              <div className="price" style={{ width: "292px" }}>
                <h2>Rp. {this.state.harga}</h2>
                <button
                  className="btn btn-booking"
                  onClick={() => this.handleBook()}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Modal */}
        <Modal
          classname="modal"
          show={this.state.isModalOpen}
          onHide={this.handleClose}
        >
          <Modal.Header classname="modal-header" closeButton>
            {this.state.action === "insert" ? (
              <Modal.Title className="modalTitle">Input Data Room</Modal.Title>
            ) : (
              <Modal.Title className="modalTitle">Edit Data Room</Modal.Title>
            )}
          </Modal.Header>
          <Form onSubmit={(e) => this.handleSave(e)}>
            <Modal.Body className="modal-body">
              <Form.Group controlId="tgl_check_in">
                <Form.Label>Check In Date</Form.Label>
                <Form.Control
                  type="date"
                  name="tgl_check_in"
                  value={this.state.tgl_check_in}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="tgl_check_out">
                <Form.Label>Check Out Date</Form.Label>
                <Form.Control
                  type="date"
                  name="tgl_check_out"
                  value={this.state.tgl_check_out}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="nama_tamu">
                <Form.Label>Guest Name</Form.Label>
                <Form.Control
                  type="text"
                  name="nama_tamu"
                  value={this.state.nama_tamu}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="jumlah_kamar">
                <Form.Label>Total Room</Form.Label>
                <Form.Control
                  type="number"
                  name="jumlah_kamar"
                  value={this.state.jumlah_kamar}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer classname="modal-footer">
              <button className="btn btn-md btn-submit" type="submit">
                save
              </button>
            </Modal.Footer>
          </Form>
        </Modal>
        <Footer />
      </div>
    );
  }
}

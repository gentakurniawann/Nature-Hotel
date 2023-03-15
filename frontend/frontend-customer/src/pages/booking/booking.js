import React from "react";
import NavbarColored from "../../component/navbar/navbarColored";
import Footer from "../../component/footer/footer";
import axios from "axios";
import Media from "../../component/media/media";
import { Modal } from "react-bootstrap";
import BookingTable from "../../component/table/bookingTable";
import "./styles.css";
export default class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      pemesanan: [],
      id_pemesanan: "",
      id_customer: "",
      nomor_pemesanan: 0,
      nama_tipe_kamar: "",
      tgl_pemesanan: "",
      tgl_check_in: "",
      tgl_check_out: "",
      nama_tamu: "",
      jumlah_kamar: "",
      harga: 0,
      status: "",
      token: "",
      isModalOpen: false,
    };
    this.state.token = localStorage.getItem("token");
  }
  handleClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  handleDetail = (selectedItem) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const checkInDate = new Date(selectedItem.tgl_check_in);
    const checkOutDate = new Date(selectedItem.tgl_check_out);
    const dayTotal = Math.round(
      (checkOutDate - checkInDate) / (1000 * 3600 * 24)
    );
    this.setState({
      isModalOpen: true,
      id_pemesanan: selectedItem.id_pemesanan,
      id_customer: selectedItem.id_customer,
      nomor_pemesanan: selectedItem.nomor_pemesanan,
      nama_tipe_kamar: selectedItem.tipe_kamar.nama_tipe_kamar,
      tgl_pemesanan: selectedItem.tgl_pemesanan,
      tgl_check_in: selectedItem.tgl_check_in,
      tgl_check_out: selectedItem.tgl_check_out,
      nama_tamu: selectedItem.nama_tamu,
      jumlah_kamar: selectedItem.jumlah_kamar,
      harga:
        selectedItem.tipe_kamar.harga * selectedItem.jumlah_kamar * dayTotal,
      status: selectedItem.status_pemesanan,
    });
  };
  handlePrint = () => {
    let printContents = document.getElementById("printableArea").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  getPemesanan = () => {
    let id_customer = localStorage.getItem("id_customer");
    let url = "http://localhost:2604/pemesanan/find/" + id_customer;
    axios
      .get(url)
      .then((res) => {
        this.setState({
          pemesanan: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  componentDidMount = () => {
    this.getPemesanan();
  };
  render() {
    return (
      <div>
        <NavbarColored />
        <section className="booking-page">
          <div className="container">
            <h1 className="text-center">Booking</h1>
            <div className="card">
              <div className="card-body">
                {this.state.token !== null ? (
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">NO</th>
                          <th scope="col">ID Booking</th>
                          <th scope="col">Booking Number</th>
                          <th scope="col">Room Name</th>
                          <th scope="col">Booking Date</th>
                          <th scope="col">Check In Date</th>
                          <th scope="col">Check Out Date</th>
                          <th scope="col">Guest Name</th>
                          <th scope="col">Room Total</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.pemesanan.map((item, index) => {
                          const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                          const checkInDate = new Date(item.tgl_check_in);
                          const checkOutDate = new Date(item.tgl_check_out);
                          const dayTotal = Math.round(
                            (checkOutDate - checkInDate) / (1000 * 3600 * 24)
                          );
                          return (
                            <BookingTable
                              key={index}
                              no={index + 1}
                              id_pemesanan={item.id_pemesanan}
                              nomor_pemesanan={item.nomor_pemesanan}
                              nama_tipe_kamar={item.tipe_kamar.nama_tipe_kamar}
                              tgl_pemesanan={item.tgl_pemesanan}
                              tgl_check_in={item.tgl_check_in}
                              tgl_check_out={item.tgl_check_out}
                              nama_tamu={item.nama_tamu}
                              jumlah_kamar={item.jumlah_kamar}
                              harga={
                                item.tipe_kamar.harga *
                                item.jumlah_kamar *
                                dayTotal
                              }
                              onDetail={() => this.handleDetail(item)}
                            />
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div>
                    <p className="text-center"> you must Login </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <div>
          <Modal
            classname="modal"
            show={this.state.isModalOpen}
            onHide={this.handleClose}
          >
            <Modal.Header classname="modal-header" closeButton>
              <Modal.Title className="modalTitle">Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body classname="modal-body" id="printableArea">
              <p>ID Booking : {this.state.id_pemesanan}</p>
              <p>ID Customer : {this.state.id_customer}</p>
              <p>Booking Number : {this.state.nomor_pemesanan}</p>
              <p>Room Name : {this.state.nama_tipe_kamar}</p>
              <p>Booking Date : {this.state.tgl_pemesanan}</p>
              <p>Check In Date : {this.state.tgl_check_in}</p>
              <p>Check Out Date : {this.state.tgl_check_out}</p>
              <p>Guest Name : {this.state.nama_tamu}</p>
              <p>Total Room: {this.state.jumlah_kamar}</p>
              <p>Price : Rp. {this.state.harga}</p>
              <p>Status: {this.state.status}</p>
            </Modal.Body>
            <Modal.Footer classname="modal-footer">
              <button
                className="btn btn-md btn-print"
                onClick={() => this.handlePrint()}
              >
                Print
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <Footer />
      </div>
    );
  }
}

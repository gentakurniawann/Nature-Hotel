import React from "react";
import NavbarColored from "../../component/navbar/navbarColored";
import Footer from "../../component/footer/footer";
import CardRoom from "../../component/card/cardRoom";
import axios from "axios";
import "./styles.css";
export default class Room extends React.Component {
  constructor() {
    super();
    this.state = {
      tipe_kamar: [],
      token: "",
      search: "",
    };
  }
  getRoomType = () => {
    let url = "http://localhost:2604/tipe_kamar";
    axios
      .get(url)
      .then((res) => {
        this.setState({
          tipe_kamar: res.data.tipe_kamar,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  componentDidMount = () => {
    this.getRoomType();
  };
  render() {
    return (
      <div>
        <NavbarColored></NavbarColored>
        <section className="room-page">
          <div className="container">
            <h1 className="text-center">Our Rooms</h1>
            <div className="row" style={{ rowGap: "40px" }}>
              {this.state.tipe_kamar.map((item, index) => {
                return (
                  <CardRoom
                    key={index}
                    foto={"http://localhost:2604/image/tipe_kamar/" + item.foto}
                    nama_tipe_kamar={item.nama_tipe_kamar}
                    harga={item.harga}
                    id={item.id_tipe_kamar}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

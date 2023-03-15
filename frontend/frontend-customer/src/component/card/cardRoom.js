import React from "react";
import Media from "../media/media";
import { Link } from "react-router-dom";
import "./styles.css";
export default class CardRoom extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card-room">
          <div className="card-body">
            <div className="card-img">
              <img
                alt={this.props.nameimage}
                src={this.props.foto}
                width="100%"
              />
            </div>
            <h2>{this.props.nama_tipe_kamar}</h2>
            <p> RP. {this.props.harga}</p>
          </div>
          <Link to={"/room-detail/" + this.props.id}>
            <button className="btn btn-viewDetail">View Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

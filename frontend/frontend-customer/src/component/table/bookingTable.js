import React from "react";

export default class BookingTable extends React.Component {
  render() {
    return (
      <tr className={this.props.className}>
        <td>{this.props.no}</td>
        <td>{this.props.id_pemesanan}</td>
        <td>{this.props.nomor_pemesanan}</td>
        <td>{this.props.nama_tipe_kamar}</td>
        <td>{this.props.tgl_pemesanan}</td>
        <td>{this.props.tgl_check_in}</td>
        <td>{this.props.tgl_check_out}</td>
        <td>{this.props.nama_tamu}</td>
        <td>{this.props.jumlah_kamar}</td>
        <td>RP. {this.props.harga}</td>
        <td>
          <button className="btn btn-detail" onClick={this.props.onDetail}>
            Detail
          </button>
        </td>
      </tr>
    );
  }
}

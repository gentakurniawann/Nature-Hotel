import React from "react";
import SidebarAdmin from "../../component/sidebar/sidebarAdmin";
export default class Dashboard extends React.Component {
  render() {
    return(
      <SidebarAdmin {...this.props}></SidebarAdmin>
    )
  }
}

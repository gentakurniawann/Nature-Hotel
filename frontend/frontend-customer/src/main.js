import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Room from "./pages/room/room";
import RoomDetail from "./pages/roomDetails/roomDetail";
import Gallery from "./pages/gallery/gallery";
import Booking from "./pages/booking/booking";
import Profile from "./pages/profile/profile";
export default class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/room" component={Room}></Route>
        <Route exact path="/room-detail/:id" component={RoomDetail}></Route>
        <Route exact path="/gallery" component={Gallery}></Route>
        <Route exact path="/booking" component={Booking}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    );
  }
}

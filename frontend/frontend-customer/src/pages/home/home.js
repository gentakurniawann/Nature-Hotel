import React from "react";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import Media from "../../component/media/media";
import { Link } from "react-router-dom";
import "./styles.css";
export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navbar></Navbar>
        <section className="banner">
          <div className="container">
            <div className="d-flex justify-content-center">
              <h1>Enjoy an Unforgettable Journey with Us</h1>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#about" style={{ color: "#73a942" }}>
                <button className="btn btn-learnMore">Learn More</button>
              </a>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="content">
                  <h3>About Us</h3>
                  <h2>
                    We give you the experience of staying with natural
                    atmosphere
                  </h2>
                  <p>
                    Esteemed guests can enjoy the experience of staying and
                    relaxing in a five-star hotel with complete facilities and
                    beautiful natural views at the Nature hotel
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <Media value image="about-img.svg"></Media>
              </div>
            </div>
          </div>
        </section>
        <section className="facilities">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <Media value image="facilities-img.svg" width="100%"></Media>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="content">
                  <h2>You’ll never want to leave</h2>
                  <p style={{ marginBottom: "24px" }}>
                    The freedom to do exactly watch you want: whether it is
                    dipping into a tub of hot water with a book or exploring
                    local culture. The perfect place to open your heart and let
                    it decide!
                  </p>
                  <div className="d-flex" style={{ gap: "56px" }}>
                    <div>
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "8px", marginBottom: "16px" }}
                      >
                        <Media value image="icon-spa.svg" width="32px"></Media>
                        <p>Spa</p>
                      </div>
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "8px", marginBottom: "16px" }}
                      >
                        <Media
                          value
                          image="icon-restaurant.svg"
                          width="32px"
                        ></Media>
                        <p>Dining</p>
                      </div>
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "8px", marginBottom: "16px" }}
                      >
                        <Media
                          value
                          image="icon-fishing.svg"
                          width="32px"
                        ></Media>
                        <p>Fishing</p>
                      </div>
                    </div>
                    <div>
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "8px", marginBottom: "16px" }}
                      >
                        <Media value image="icon-pool.svg" width="32px"></Media>
                        <p>Pool</p>
                      </div>
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "8px", marginBottom: "16px" }}
                      >
                        <Media value image="icon-bar.svg" width="32px"></Media>
                        <p>Bar</p>
                      </div>
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "8px", marginBottom: "16px" }}
                      >
                        <Media
                          value
                          image="icon-barbeque.svg"
                          width="32px"
                        ></Media>
                        <p>Barbeque</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="room">
          <div
            className="content d-flex align-items-center"
            style={{ gap: "32px" }}
          >
            <div>
              <Media value image="room-img.png"></Media>
            </div>
            <div>
              <div className="room-category">
                <h2>Standart Bedroom</h2>
                <div className="d-flex" style={{ gap: "24px" }}>
                  <p>2 guest </p>
                  <p>1 Double bed</p>
                  <p>23 m2</p>
                </div>
              </div>
              <div className="room-category">
                <h2>Family Bedroom</h2>
                <div className="d-flex" style={{ gap: "24px" }}>
                  <p>4 guest </p>
                  <p>2 Double bed</p>
                  <p>2 Single bed</p>
                  <p>42 m2</p>
                </div>
              </div>
              <div className="room-category">
                <h2>Premium Bedroom</h2>
                <div className="d-flex" style={{ gap: "24px" }}>
                  <p>2 guest </p>
                  <p>1 Double bed</p>
                  <p>40 m2</p>
                </div>
              </div>
              <div className="room-category">
                <h2>Superior Bedroom</h2>
                <div className="d-flex" style={{ gap: "24px" }}>
                  <p>2 guest </p>
                  <p>1 Double bed</p>
                  <p>56 m2</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 col-sm-12">
                <Media value image="testimonial-img.svg" width="100%"></Media>
              </div>
              <div className="col-md-6 col-sm-12">
                <h3>Happy Family</h3>
                <p>
                  “What a great trip with my family and I should try again next
                  time soon”
                </p>
                <Media value image="icon-star.svg"></Media>
              </div>
            </div>
          </div>
        </section>
        <section className="special-offer">
          <div className="container">
            <h2 className="text-center">Special Offers</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="offer-card">
                  <Media
                    value
                    image="offer-dinner-img.svg"
                    width="100%"
                  ></Media>
                </div>
                <h3>Romantic Dinner</h3>
                <p>
                  Enjoy your intimate moment with your loved one by enjoying a
                  precious romantic candle light dinner at Nature Hotel
                  Restaurant
                </p>
                <Link to="" className="d-felx align-items-center">
                  See Offer
                </Link>
              </div>
              <div className="col-md-4">
                <div className="offer-card">
                  <Media value image="offer-book-img.svg" width="100%"></Media>
                </div>
                <h3>Book Early Save More</h3>
                <p>
                  Plan Your Holiday and SAVE up to 30% Off Dreaming to explore
                  the beauty of Indonesia
                </p>
                <Link to="" className="d-felx align-items-center">
                  See Offer
                </Link>
              </div>
              <div className="col-md-4">
                <div className="offer-card">
                  <Media
                    value
                    image="offer-weekend-img.svg"
                    width="100%"
                  ></Media>
                </div>
                <h3>Weekend Offer</h3>
                <p>
                  Book direct to get our best offer for your weekend stay with
                  your beloved ones!
                </p>
                <Link to="" className="d-felx align-items-center">
                  See Offer
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

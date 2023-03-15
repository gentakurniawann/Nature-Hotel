import React from "react";
import Media from "../../component/media/media";
import NavbarColored from "../../component/navbar/navbarColored";
import Footer from "../../component/footer/footer";
import "./styles.css";
export default class Gallery extends React.Component {
  render() {
    return (
      <div>
        <NavbarColored></NavbarColored>
        <section className="gallery-page">
          <div className="container">
            <h1 className="text-center">Gallery</h1>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-1.svg" width="100%" />
              </div>
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-2.svg" width="100%" />
              </div>
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-3.svg" width="100%" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-4.svg" width="100%" />
              </div>
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-5.svg" width="100%" />
              </div>
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-6.svg" width="100%" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-7.svg" width="100%" />
              </div>
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-8.svg" width="100%" />
              </div>
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-9.svg" width="100%" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-10.svg" width="100%" />
              </div>
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-11.svg" width="100%" />
              </div>
              <div className="col-md-4 col-sm-6">
                <Media value image="img-gallery-12.svg" width="100%" />
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

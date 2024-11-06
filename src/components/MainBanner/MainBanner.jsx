import React from "react";
import slider from "../../assets/images/slider-dec.png"; // doble comillas y esta es la ruta para cargar las imagenes
function MainBanner({ title, description }) {
  return (
    <div className="main-banner wow fadeIn" id="inicio" data-wow-duration="1s" data-wow-delay="0.5s">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                    <div className="col-lg-12">
                      <div className="white-button first-button scroll-to-section">
                        <a href="#contacto">Descargar en App Store <i className="fab fa-apple"></i></a>
                      </div>
                      <div className="white-button scroll-to-section">
                        <a href="#contacto">Descargar en Google Play <i className="fab fa-google-play"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                  <img src={slider} alt="Imagen de la App" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;

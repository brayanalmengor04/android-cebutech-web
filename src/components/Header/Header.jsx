// Header.js
import React, { useEffect } from 'react';
import WOW from 'wowjs'; // Importa WOW.js
import logo from "../../assets/images/logo.png"; // doble comillas y esta es la ruta para cargar las imagenes

const Header = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img src={logo} alt="Cebu Tech" />
              </a>
  
              <ul className="nav">
                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                <li className="scroll-to-section"><a href="#services">Services</a></li>
                <li className="scroll-to-section"><a href="#about">About</a></li>
                <li className="scroll-to-section"><a href="#pricing">Pricing</a></li>
                <li className="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
                <li>
                  <div className="gradient-button">
                    <a id="modal_trigger" href="#modal"><i class="bi bi-android"></i> Sign In Now</a>
                  </div>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

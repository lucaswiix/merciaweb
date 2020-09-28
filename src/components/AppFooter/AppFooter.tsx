import React from 'react';

// import { Container } from './styles';

const AppFooter: React.FC = () => {
  return (
    <footer className="footer footer_transparent footer_overview" style={{
      bottom: 0,
    }}>
      <div className="footer--content">
        <div className="footer--address">
          <div className="address">
            <div className="address--icon">
              <i className="fi-marker"></i>
            </div>
            <div className="address--info">
              <p className="address--info-title">XXXXX</p>
              <p className="address--info-subtitle">XXXXXX</p>
              <a className="address--info-link" href="https://www.google.com.br/maps/place/Ita%C3%BA+Cultural/@-23.5703921,-46.6458943,15z/data=!4m5!3m4!1s0x0:0x90799dc4b5ae72f2!8m2!3d-23.5703921!4d-46.6458943?sa=X&amp;ved=0ahUKEwi6vPiugqfUAhXDgJAKHeIjC0cQ_BIIggEwDQ" target="_blank">Ver no mapa</a>
            </div>
          </div>

        </div>
        <div className="footer--copyright">
          <div className="copyright">
            <p className="copyright--title">© 2019 Copyright Funcultura</p>
          </div>

        </div>
        <div className="footer--partners">
          <div className="partners">
            <div className="partners--media">
              <div className="partners--items partners--image_positivo">
                <img className="partners--image" src="/conscienciacibernetica/2019/assets/images/regua_ic_minc_2016__-480x86.png" alt="" />
              </div>
              <div className="partners--items partners--image_negativo">
                <img className="partners--image" src="/conscienciacibernetica/2019/assets/images/regua_ic_minc_2016_white__-480x86.png" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>);
}

export default AppFooter;
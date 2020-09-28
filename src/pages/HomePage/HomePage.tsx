import React from 'react';

// import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <div className="overview">

      <div className="overview--content">
        <div className="overview--content-media">
          <img className="overview--brand overview--brand_sm" src="https://www.itaucultural.org.br/conscienciacibernetica/2019/assets/images/logo-home-desk.png" alt="" />
          <img className="overview--brand overview--brand_xs" src="https://www.itaucultural.org.br/conscienciacibernetica/2019/assets/images/logo-home-desk.png" alt="" />
        </div>
        <div className="overview--date">
          <span className="overview--date-start">28.3</span>
          <span className="overview--date-end">19.5.2019</span>
        </div>
        <div className="call-to-action">
          <a className="call-to-action--btn" href="/conscienciacibernetica/2019/sobre/" target="_self">
            <span className="before"></span>
				A exposição
				<span className="after"></span>
          </a>
        </div>

        <div className="aexpo">
          <div className="columns">
            <p>
              Confira abaixo o catálogo que acompanhou a exposição </p>
          </div>
        </div>


      </div>
    </div>

  );
}

export default HomePage;
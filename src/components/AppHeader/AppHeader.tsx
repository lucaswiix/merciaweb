import { Dropdown, Menu } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import deLang from '../../lang/de.json';
import ptLang from '../../lang/pt.json';

const AppHeader: React.FC = () => {

  const actualLang = localStorage.getItem('lang') && localStorage.getItem('lang').toLowerCase() === 'de' ? deLang : ptLang;

  useEffect(() => {
    if (localStorage.getItem('lang') && localStorage.getItem('lang') !== 'pt' && localStorage.getItem('lang') !== 'de') {
      localStorage.removeItem('lang');
    }
  }, [])

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" onClick={() => changeLang('pt')}>
          Português
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" onClick={() => changeLang('de')}>
          Deutsche
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header">
      <div className="header--content">

        <div className="header--brand_first">
          <div className="brand">
            <a href="/">
              <img src="https://www.itaucultural.org.br/conscienciacibernetica/2019/assets/images/logo_evento.png" alt="" />
            </a>
          </div>
        </div>

        <div className="header--language">
          <div className="navigation-language">
            <div className="navigation-language--wrapper">
              <Dropdown overlay={menu}>
                <a className="navigation-language--toggle" id="languageToggle" onClick={e => e.preventDefault()}>
                  {localStorage.getItem('lang') && localStorage.getItem('lang').toLowerCase() !== 'de' ? 'PT' : 'DE'}
                </a>
              </Dropdown>
            </div>
          </div>

        </div>

        <div className="header--menu">
          <nav className="navigation-main">
            <ul className="navigation-main--list">

              <li className="navigation-main--item">
                <Link className="navigation-main--link" to="/sobre">
                  <i className="fi-list navigation-main--icon"></i>
                  <span className="navigation-main--text">{actualLang.menu.about}</span>
                </Link>
              </li>
              <li className="navigation-main--item">
                <Link className="navigation-main--link" to="/artistas" >
                  <i className="fi-person navigation-main--icon"></i>
                  <span className="navigation-main--text">{actualLang.menu.artists}</span>
                </Link>
              </li>
              <li className="navigation-main--item">
                <Link className="navigation-main--link" to="/obras">
                  <i className="fi-agenda navigation-main--icon"></i>
                  <span className="navigation-main--text">{actualLang.menu.constructions}</span>
                </Link>
              </li>
              <li className="navigation-main--item">
                <Link className="navigation-main--link" to="/encontros">
                  <i className="fi-question-mark navigation-main--icon"></i>
                  <span className="navigation-main--text">{actualLang.menu.meetings}</span>
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );

  function changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}

export default AppHeader;
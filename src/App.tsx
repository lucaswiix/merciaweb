import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter, Route, RouteProps, Switch, Redirect } from 'react-router-dom';
import AppFooter from './components/AppFooter/AppFooter';
import AppHeader from './components/AppHeader/AppHeader';
import ArtistasPage from './pages/ArtistasPage/Artistas';
import HomePage from './pages/HomePage/HomePage';
import EncontrosPage from './pages/EncontrosPage/Encontros';
import ObrasPage from './pages/ObrasPage/Obras';
import SobrePage from './pages/SobrePage/Sobre';
import ptLang from './lang/pt.json';
import deLang from './lang/de.json';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <RouterTemplate exact path="/" component={HomePage} />
          <RouterTemplate path="/sobre" component={SobrePage} />
          <RouterTemplate path="/artistas" component={ArtistasPage} />
          <RouterTemplate path="/obras" component={ObrasPage} />
          <RouterTemplate path="/encontros" component={EncontrosPage} />
          <Route path="*">
            <Redirect to="/" />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}




export interface IRouterTemplate extends RouteProps {
  component?: any;
}

const RouterTemplate: React.FC<IRouterTemplate> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <main id="page-wrapper" className="main home">
          <header className="header">
            <AppHeader />
          </header>
          <Component {...props} />
          <AppFooter />
        </main>

      )}
    />
  );
};
export default App;

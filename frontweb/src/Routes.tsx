import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/Navbar';

import MovieDetails from 'pages/MovieDetails';
import MovieCatalog from 'pages/MovieCatalog';
import Auth from 'pages/Admin/Auth';
import Home from 'pages/Home';
import Admin from 'pages/Admin';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      
      <Route path="/home" exact>
        <Home />
      </Route>

      <Redirect from="/" to="/admin/auth/login" exact />
      <Route path="/">
        <Auth />
      </Route>

      <Route path="/movies" exact>
        <MovieCatalog />
      </Route>

      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>

      <Route path="/admin/auth" exact>
        <Auth />
      </Route>

      <Route path="/admin" exact>
        <Admin />
      </Route>

    </Switch>
  </BrowserRouter>
);

export default Routes;

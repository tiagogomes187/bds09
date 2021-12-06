import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/Navbar';

import MovieDetails from 'pages/MovieDetails';
import MovieCatalog from 'pages/MovieCatalog';
import Auth from 'pages/Admin/Auth';
import Home from 'pages/Home';
import Admin from 'pages/Admin';
import history from 'util/history';
import Reviews from 'pages/Reviews';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/home" exact>
      <Home />
      </Route>

      <Route path="/movies" exact>
        <MovieCatalog />
      </Route>

      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>

      <Route path="/reviews">
        <Reviews />
      </Route>

      <Redirect from="/" to="/admin/auth/login" exact />
      <Route path="/">
        <Auth />
      </Route>

      <Redirect from="/admin" to="/admin/auth/login" exact />
      <Route path="/admin">
        <Admin />
      </Route>
      
      <Route path="/admin/auth" exact>
        <Auth />
      </Route>


    </Switch>
  </Router>
);

export default Routes;

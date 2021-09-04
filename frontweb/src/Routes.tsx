import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/Navbar';
import MoviesDetails from 'pages/MoviesDetails';
import MovieCatalog from 'pages/MovieCatalog';
import Auth from 'pages/Admin/Auth';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/admin/auth/login" exact />
      <Route path="/">
        <Auth />
      </Route>
      <Route path="/movies">
        <MovieCatalog />
      </Route>
      <Route path="/movies/:movieId">
        <MoviesDetails />
      </Route>
      <Route path="/admin/auth">
        <Auth />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
//
import Home from './pages/Home';
import Cast from './pages/Cast';
import ShowInfo from './pages/ShowInfo';
import ShowSeasons from './pages/ShowSeasons';
import Episodes from './pages/Episodes';
import Navbar from './components/Navbar';
//
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shows/:showId' exact component={ShowInfo} />
          <Route path='/shows/:showId/cast' exact component={Cast} />
          <Route path='/shows/:showId/seasons' exact component={ShowSeasons} />
          <Route path='/seasons/:seasonId/episodes' exact component={Episodes} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;

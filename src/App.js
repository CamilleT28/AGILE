import './App.css';
import './CSS/Style.css';

import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import Main from './Components/Index/Main';
import MetroCardList from './Components/Listings/MetroCardList';
import MobileNavigation from './Components/Mobile Navigation/MobileNavigation';

function App() {
  return (
    <div className='App'>
      <Header />
      <MobileNavigation />

      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/news'>
          <MetroCardList />
        </Route>
        <Route exact path='/report'></Route>
        <Route exact path='/notifications'></Route>
        <Route exact path='/profile-page'></Route>
      </Switch>
    </div>
  );
}

export default App;

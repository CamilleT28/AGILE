import './App.css'
import './CSS/Style.css';
import Header from './Components/Header/Header';
import MobileNavigation from './Components/Mobile Navigation/MobileNavigation';
import Main from './Components/Index/Main';

function App() {
  return (
    <div className="App">
     <Header />
     <MobileNavigation />
     <Main />
    </div>
  );
}

export default App;

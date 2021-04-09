// import fox from './images/fox.svg';
import Header from '../header';
import ItemList from '../itemList';
import './app.css';

function App() {
  return (
    <div className="App">      
      {/* <img src={fox} className="App-logo" alt="logo" /> */}
      <Header/>
      <ItemList/>
    </div>
  );
}

export default App;

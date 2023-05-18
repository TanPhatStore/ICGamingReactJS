import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='boxParent'></div>
      <HomePage />
      <div className='boxParent'></div>
      <Footer />
    </div>
  );
}

export default App;

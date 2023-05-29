import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer'
import GameDetailPage from './GameDetailPage';
import ListGamesPage from './ListGamesPage'
import {Routes , Route} from 'react-router-dom'
import { useContext } from 'react';
import { Context } from './UseContext/Context';

function App() {

  const [handle, data] = useContext(Context)

  return (
    <div className="App">
      <Header />
      <div className='boxParent'></div>

      <Routes>
        <Route path='/' element={<GameDetailPage />} /> 
        <Route path='/list-games-page/all-games' element={<ListGamesPage typeGame={'all-games'} />} /> 
        {data.listGames.map((item, index) => (
            <Route key={index} path={`/list-games-page/${item.toLowerCase().split(' ').join('-')}-games`} element={<ListGamesPage typeGame={`${item.toLowerCase().split(' ').join('-')}`} />} /> 
        ))}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

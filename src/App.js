
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer'
import GameDetailPage from './GameDetailPage';
import ListGamesPage from './ListGamesPage'
import {Routes , Route} from 'react-router-dom'
import { useContext } from 'react';
import { Context } from './UseContext/Context';
import { useState, useEffect } from 'react';

function App() {

  const [handle, data] = useContext(Context)

  return (
    <div className="App">
      <Header opa = {document.querySelector('#effectOpacity')} />
      <div className='boxParent'></div>

      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/list-games-page/all-games' element={<ListGamesPage typeGame={'all-games'} />} /> 
        {data.listGames.map((item, index) => (
            <Route key={index} path={`/list-games-page/${item.toLowerCase().split(' ').join('-')}-games`} element={<ListGamesPage typeGame={`${item.toLowerCase().split(' ').join('-')}`} />} /> 
        ))}
        {data.games.map((game, index) => (
            <Route key={index} path={`/games/${game.title.toLowerCase().split(' ').join('-')}`} element={<GameDetailPage game={game} />}  /> 
        ))}
      </Routes>

      <Footer />
      <div id='effectOpacity'>

      </div>
    </div>
  );
}

export default App;

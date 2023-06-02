
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
import './App.scss';
import logo from '../src/icgaming.png'

function App() {

  const [handle, data] = useContext(Context)

  const [isPC , setIsPC ] = useState(false)
  const handleClickPC = () => {
    const subArea = document.querySelector('.subMenuItemPC')
    if (isPC == true)  {
      subArea.style.height = '0px'
      setIsPC(false)
    } else {
      subArea.style.height = '200px'
      setIsPC(true)
    }
  }


  const [isMobile , setIsMobile ] = useState(false)
  const handleClickMobile = () => {
    const subArea = document.querySelector('.subMenuItemMobile')
    if (isMobile == true)  {
      subArea.style.height = '0px'
      setIsMobile(false)
    } else {
      subArea.style.height = '200px'
      setIsMobile(true)
    }
  }

  const handleExitMenu = () => {
    const opa = document.querySelector('#effectOpacity')
    const menu = document.querySelector('#menuMobile')
    menu.style.left = '-300px'
    opa.style.backgroundColor = 'rgba(52, 51, 51, 0.0)'
    setTimeout(() => {
      opa.style.display = 'none'
    }, 500)
  }

  return (
    <div className="App">
      <Header val = {{ opa : document.querySelector('#effectOpacity'), menu : document.querySelector('#menuMobile')}} />
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
      <div id='menuMobile'>
          <div className='headerMO'>
            <div className='logoMobile'>
              <img src={logo} height='80%' width="100%" />
            </div>
            <p>IC GAMING</p>
            <i onClick={() => handleExitMenu()} className="fa-regular fa-circle-xmark"></i>
          </div>
          <div className='menuMO'>
            <div className='menuItemMO'>Home</div>
            <div className='menuItemMO' onClick={() => handleClickPC()}>Games PC <i className='bx bxs-chevron-down'></i></div>
            <div className='subMenuItemPC subMenuItemMO'></div>
            <div className='menuItemMO' onClick={() => handleClickMobile()}>Games Mobile <i className='bx bxs-chevron-down'></i></div>
            <div className='subMenuItemMobile subMenuItemMO'></div>
            <div className='menuItemMO'>Contact</div>
          </div>
      </div>
      <div id='effectOpacity'>

      </div>
    </div>
  );
}

export default App;

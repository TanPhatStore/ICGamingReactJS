
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
import { Link } from 'react-router-dom';

function App() {

  const [handle, data] = useContext(Context)

  const [isPC , setIsPC ] = useState(false)
  const handleClickPC = () => {
    const subArea = document.querySelector('.subMenuItemPC')
    const num = document.getElementsByClassName('submenuPC').length

    if (document.querySelector('.subMenuItemMobile').offsetHeight > 0) {
      document.querySelector('.subMenuItemMobile').style.height = '0px'
      setIsMobile(false)
    }

    if (isPC == true)  {
      subArea.style.height = '0px'
      setIsPC(false)
    } else {
      subArea.style.height = 52.727 * num + 'px'
      setIsPC(true)
    }
  }


  const [isMobile , setIsMobile ] = useState(false)
  const handleClickMobile = () => {
    const subArea = document.querySelector('.subMenuItemMobile')
    const num = document.getElementsByClassName('submenuMobile').length

    if (document.querySelector('.subMenuItemPC').offsetHeight > 0) {
      document.querySelector('.subMenuItemPC').style.height = '0px'
      setIsPC(false)
    }

    if (isMobile == true)  {
      subArea.style.height = '0px'
      setIsMobile(false)
    } else {
      subArea.style.height = 52.727 * num + 'px'
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
            <div className='menuItemMO'><Link onClick={() => {handle.handleScrollUp(); handleExitMenu()}} className='link' to="/">Home</Link></div>
            <div className='menuItemMO' onClick={() => handleClickPC()}>Games PC <i className='bx bxs-chevron-down'></i></div>
            <div className='subMenuItemPC subMenuItemMO'>
              {data.listGamesPC.map((menu, index) => (
                <div key={index} className='submenuPC submenu'><Link className='link' onClick={() => {handle.handleScrollUp() ; handleExitMenu()}} to={`list-games-page/${menu.toLowerCase().split(' ').join('-')}-games`}>{menu}</Link></div>
              ))}
              <div className='submenuPC submenu'><Link onClick={() => {handle.handleScrollUp() ; handleExitMenu()}} className='link' to="/list-games-page/all-games">All Games</Link></div>
            </div>
            <div className='menuItemMO' onClick={() => handleClickMobile()}>Games Mobile <i className='bx bxs-chevron-down'></i></div>
            <div className='subMenuItemMobile subMenuItemMO'>
              {data.listGamesMobile.map((menu, index) => (
                <div key={index} className='submenuMobile submenu'><Link className='link' onClick={() => {handle.handleScrollUp() ; handleExitMenu()}} to={`list-games-page/${menu.toLowerCase().split(' ').join('-')}-games`}>{menu}</Link></div>
              ))}
              <div className='submenuMobile submenu'><Link onClick={() => {handle.handleScrollUp() ; handleExitMenu()}} className='link' to="/list-games-page/all-games">All Games</Link></div>
            </div>
            <div className='menuItemMO' onClick={() =>  {handle.handleScrollDown(); handleExitMenu()}}>Contact</div>
          </div>
      </div>
      <div id='effectOpacity'>

      </div>
    </div>
  );
}

export default App;

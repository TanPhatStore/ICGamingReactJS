
import './listGames.scss'
import  GamesRandom from './GamesRandom'
import ListGames from './ListGames'
import { useContext } from 'react'
import { Context } from '../UseContext/Context'
import { Link } from 'react-router-dom';

function ListGamesPage({typeGame}) {
    const [handle, data] = useContext(Context)
    const menuItems = [...data.listGames, 'All Games']

    const handleClickMenu = (num) => {
        const active = document.querySelector(".active")
        const currentMenuItem = document.querySelector('.menuItem' + num)
        active.classList.remove('active')
        currentMenuItem.classList.add('active')
    }
    return ( 
        <div id='listGames'>
            <GamesRandom/>
            <div className="menuGames col-lg-12">
                <div className="menu ">
                    {menuItems.map((m,index) => (
                        <Link className='link' onClick={handle.handleScrollUp} to={m == 'All Games' ? `/list-games-page/all-games` : `/list-games-page/${m.toLowerCase().split(' ').join('-')}-games`}>
                            <div onClick={() => handleClickMenu(index)} key={index} className={m.toLowerCase().split(' ').join('-') != typeGame ? 'menuItem menuItem'+index : 'menuItem active menuItem'+index}>
                                {m}
                            </div>
                        </Link>
                        
                    ))}
                </div>
            </div>
            <ListGames />
            <div className='boxParent'></div>
        </div>
     );
}

export default ListGamesPage;
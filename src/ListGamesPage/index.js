
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
                <div className="menu">
                    {menuItems.map((m,index) => (
                        <Link key={index} className='link' onClick={handle.handleScrollUp} to={m == 'All Games' ? `/list-games-page/all-games` : `/list-games-page/${m.toLowerCase().split(' ').join('-')}-games`}>
                            <div onClick={() => handleClickMenu(index)} key={index} className={m.toLowerCase().split(' ').join('-') != typeGame ? 'menuItem menuItem'+index : 'menuItem active menuItem'+index}>
                                {m}
                            </div>
                        </Link>
                        
                    ))}
                </div>
            </div>
            <div className='menuVideosMobile'>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Games
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li><a class="dropdown-item active" href="#">GTA</a></li>
                        <li><a class="dropdown-item" href="#">Naruto Shippudent</a></li>
                        <li><a class="dropdown-item" href="#">Far Cry</a></li>
                        <li><a class="dropdown-item" href="#">Plant vs Zombies</a></li>
                    </ul>
                </div>
            </div>
            <div className='boxChildren'></div>
            <ListGames typeGame={typeGame}/>
            <div className='boxParent'></div>
            <div className='boxChildren'></div>
        </div>
     );
}

export default ListGamesPage;
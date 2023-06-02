
import './header.scss'
import logo from '../icgaming.png'
import {useEffect, useRef, useState, useContext} from 'react'
import { Context } from '../UseContext/Context';
import { Link } from 'react-router-dom';
function Header({val}) {

    const [handle, data] = useContext(Context)

    const [menuGamesPC, setMenuGamesPC] = useState([])
    const [menuGamesMobile, setMenuGamesMobile] = useState([])
    const subMenuGamesPCRef = useRef()
    const menuGamesPCRef = useRef()
    const subMenuGamesMobileRef = useRef()
    const menuGamesMobileRef = useRef()

    useEffect(() => {
        setMenuGamesPC(data.listGamesPC)
        setMenuGamesMobile(data.listGamesMobile)
        menuGamesPCRef.current.addEventListener('mouseover', () => {
            subMenuGamesPCRef.current.style.height = 50 * (menuGamesPC.length + 1) + 'px'
        })
        menuGamesPCRef.current.addEventListener('mouseout', () => {
            subMenuGamesPCRef.current.style.height = 0
        })
        menuGamesMobileRef.current.addEventListener('mouseover', () => {
            subMenuGamesMobileRef.current.style.height = 50 * (menuGamesMobile.length + 1) + 'px'
        })
        menuGamesMobileRef.current.addEventListener('mouseout', () => {
            subMenuGamesMobileRef.current.style.height = 0
        })
    })

    const [listGames, setListGames] = useState([])
    let list = []
    const handleChangeInput = () => {
        let value = document.querySelector('#txtsearch').value.toLowerCase()
        const area = document.querySelector('#areaResultSearch')
        if (value != '') {
            area.style.height = '300px'
        } else {
            area.style.height = '0px'
        }
        list = []
        data.games.forEach(game => {
            if (game.title.toLowerCase().includes(value)) 
                list.push(game)
        })
        setListGames(list)
    }

    const handleClickMenuMO = () => {   
        val.opa.style.display = 'block'
        setTimeout(() => {
            val.opa.style.backgroundColor = 'rgba(52, 51, 51, 0.7)'
        },100)
        val.menu.style.left = 0
    }

    return (  
    <div  className="col-lg-12 col-12 header">
        <div className='col-lg-12 col-12 row'>
            <div className='iconMobile col-lg-1' onClick={() => handleClickMenuMO()}><i className="fa-solid fa-bars"></i></div>
            <div className='iconSearch iconMobile'><i className="fa-solid fa-magnifying-glass fa-rotate-90"></i></div>
            <div className='col-lg-2 logo'> 
                <img src={logo} height="70%"></img>
                <div id="subLogo">
                    <p id='title'>IC GAMING</p>
                    <p id='description'>Download Game</p>
                </div>
            </div>  


            <ul id='menu' className='col-lg-5'>
                <li><Link onClick={handle.handleScrollUp} className='link' to="/">Home</Link></li>
                <li ref={menuGamesPCRef} className='menu menu_game'>Games PC <i className='bx bxs-chevron-down'></i>
                    <div ref={subMenuGamesPCRef} className='submenu sub_menu_game'>
                        <ul style={{width:'100%'}}>
                            {menuGamesPC.map ((m, index) => (
                                <li key={index} style={{width:'100%'}}> <Link className='link' onClick={handle.handleScrollUp} to={`list-games-page/${m.toLowerCase().split(' ').join('-')}-games`}><div id='gameImage'><img width={'100%'} src={data.PCLogo[index]} /></div> {m}</Link></li>
                            ))}
                            <li style={{width:'100%'}}> <Link onClick={handle.handleScrollUp} className='link' to="/list-games-page/all-games"><div id='gameImage'><img width={'100%'} src='https://pbs.twimg.com/profile_images/558750489152458752/pBBTFL0j_400x400.png' /></div> Xem Thêm.....</Link></li>
                        </ul>
                    </div>
                </li>
                <li ref={menuGamesMobileRef} className='menu menu_game'>Games Mobile <i className='bx bxs-chevron-down'></i>
                    <div ref={subMenuGamesMobileRef}  className='submenu sub_menu_game'>
                        <ul style={{width:'100%'}}>
                            {menuGamesMobile.map ((m, index) => (
                                <li key={index} style={{width:'100%'}}><Link className='link' onClick={handle.handleScrollUp} to={`list-games-page/${m.toLowerCase().split(' ').join('-')}-games`}><div id='gameImage'><img width={'100%'} src={data.MOLogo[index]} /></div> {m}</Link></li>
                            ))}
                            <li style={{width:'100%'}}><Link onClick={handle.handleScrollUp} className='link' to="/list-games-page/all-games"><div id='gameImage'><img width={'100%'} src='https://pbs.twimg.com/profile_images/558750489152458752/pBBTFL0j_400x400.png' /></div> Xem Thêm.....</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='menu menu_game' onClick={() =>  handle.handleScrollDown()}>About </li>
            </ul>

            <div id='search' className='col-lg-3' >
                <input 
                    id='txtsearch' 
                    type='text' 
                    className="form-control"
                    placeholder="Search game..."
                    onChange={() => handleChangeInput()}
                />
                <button id='btnsearch' type="button" className="btn btn-primary">Search</button> 
                <div id='areaResultSearch' className='col-lg-12'>
                    {listGames.map((game , index) => (
                        <Link style={{color:'black', textDecoration:'none'}} onClick={() => {handle.handleScrollUp() ;}} to={`/games/${game.title.toLowerCase().split(' ').join('-')}`}>
                            <div key={index} className='col-lg-12 item'>
                                
                                    <div className='col-lg-3 image'>
                                        <img width='85%' src={game.logo} />
                                    </div>
                                    <div className='px-1'></div>
                                    <div className='col-lg-7 name'>
                                        {game.title}
                                    </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Header;
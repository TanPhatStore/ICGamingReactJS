
import './header.scss'
import logo from '../icgaming.png'
import {useEffect, useRef, useState, useContext} from 'react'
import { Context } from '../UseContext/Context';
import { Link } from 'react-router-dom';
function Header() {

    const [handle, data] = useContext(Context)

    const [menuGamesPC, setMenuGamesPC] = useState(data.listGamesPC)
    const [menuGamesMobile, setMenuGamesMobile] = useState(data.listGamesMobile)
    const subMenuGamesPCRef = useRef()
    const menuGamesPCRef = useRef()
    const subMenuGamesMobileRef = useRef()
    const menuGamesMobileRef = useRef()

    useEffect(() => {
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


    return (  
    <div  className="col-lg-12 header"> 
        <div className='col-lg-12 row'>
            <div id="logo" className='col-lg-2'> 
                <img src={logo} height="80%"></img>
                <div id="subLogo">
                    <p id='title' style={{fontSize:'23px'}}>IC GAMING</p>
                    <p id='description'>Download Game</p>
                </div>
            </div>          

            <ul id='menu' className='col-lg-5'>
                <li><Link onClick={handle.handleScrollUp} className='link' to="/">Home</Link></li>
                <li ref={menuGamesPCRef} className='menu menu_game'>Games PC <i className='bx bxs-chevron-down'></i>
                    <div ref={subMenuGamesPCRef} className='submenu sub_menu_game'>
                        <ul style={{width:'100%'}}>
                            {menuGamesPC.map ((m, index) => (
                                <li key={index} style={{width:'100%'}}> <Link className='link' onClick={handle.handleScrollUp} to={`list-games-page/${m.toLowerCase().split(' ').join('-')}-games`}><div id='gameImage'><img width={'100%'} src='https://www.playlanmym.com/wp-content/uploads/2019/03/GTA-SAN-ANDRES.png' /></div> {m}</Link></li>
                            ))}
                            <li style={{width:'100%'}}> <Link onClick={handle.handleScrollUp} className='link' to="/list-games-page/all-games"><div id='gameImage'><img width={'100%'} src='https://pbs.twimg.com/profile_images/558750489152458752/pBBTFL0j_400x400.png' /></div> Xem Thêm.....</Link></li>
                        </ul>
                    </div>
                </li>
                <li ref={menuGamesMobileRef} className='menu menu_game'>Games Mobile <i className='bx bxs-chevron-down'></i>
                    <div ref={subMenuGamesMobileRef}  className='submenu sub_menu_game'>
                        <ul style={{width:'100%'}}>
                            {menuGamesMobile.map ((m, index) => (
                                <li key={index} style={{width:'100%'}}><Link className='link' onClick={handle.handleScrollUp} to={`list-games-page/${m.toLowerCase().split(' ').join('-')}-games`}><div id='gameImage'><img width={'100%'} src='https://www.playlanmym.com/wp-content/uploads/2019/03/GTA-SAN-ANDRES.png' /></div> {m}</Link></li>
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
                />
                <button id='btnsearch' type="button" className="btn btn-primary">Search</button> 
            </div>
        </div>
    </div>
    );
}

export default Header;
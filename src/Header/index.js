
import './header.scss'
import logo from '../icgaming.png'
import {useEffect, useRef, useState} from 'react'
function Header() {

    const [menuGamesPC, setMenuGamesPC] = useState(['GTA San Andreas', 'GTA V', 'GTA IV', 'GTA III', 'Naruto Shippudent', "Far Cry", "Plant vs Zombies"])
    const [menuGamesMobile, setMenuGamesMobile] = useState(["Plant vs Zombies", 'Dragon Ball'])
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

    const handleScroll =  () => {
        window.scrollTo(window.offsetWidth)
    }

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
                <li>Home</li>
                <li ref={menuGamesPCRef} className='menu menu_game'>Games PC <i className='bx bxs-chevron-down'></i>
                    <div ref={subMenuGamesPCRef} className='submenu sub_menu_game'>
                        <ul style={{width:'100%'}}>
                            {menuGamesPC.map ((m, index) => (
                                <li key={index} style={{width:'100%'}}><div id='gameImage'><img width={'100%'} src='https://www.playlanmym.com/wp-content/uploads/2019/03/GTA-SAN-ANDRES.png' /></div> {m}</li>
                            ))}
                            <li style={{width:'100%'}}><div id='gameImage'><img width={'100%'} src='https://pbs.twimg.com/profile_images/558750489152458752/pBBTFL0j_400x400.png' /></div> Xem Thêm.....</li>
                        </ul>
                    </div>
                </li>
                <li ref={menuGamesMobileRef} className='menu menu_game'>Game Mobile <i className='bx bxs-chevron-down'></i>
                    <div ref={subMenuGamesMobileRef}  className='submenu sub_menu_game'>
                        <ul style={{width:'100%'}}>
                            {menuGamesMobile.map ((m, index) => (
                                <li key={index} style={{width:'100%'}}><div id='gameImage'><img width={'100%'} src='https://www.playlanmym.com/wp-content/uploads/2019/03/GTA-SAN-ANDRES.png' /></div> {m}</li>
                            ))}
                            <li style={{width:'100%'}}><div id='gameImage'><img width={'100%'} src='https://pbs.twimg.com/profile_images/558750489152458752/pBBTFL0j_400x400.png' /></div> Xem Thêm.....</li>
                        </ul>
                    </div>
                </li>
                <li className='menu menu_game' onClick={() =>  handleScroll}>About </li>
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

import { useContext } from 'react'
import './videosreview.scss'
import ReactPlayer from 'react-player'
import { Context } from '../../UseContext/Context'
import { Link } from 'react-router-dom'


function VideosReview() {


    const handleClickMenu = (num) => {
        const active = document.querySelector(".active")
        const currentMenuItem = document.querySelector('.menuItem' + num)
        active.classList.remove('active')
        currentMenuItem.classList.add('active')
    }

    const image = [
        "https://i9.ytimg.com/vi/Bf3P_07WuOA/mqdefault.jpg?v=64280e66&sqp=CJDly6MG&rs=AOn4CLC1KpTiNgutKhKfgVZ2PGvRucHEMw",
        "https://i9.ytimg.com/vi/Bf3P_07WuOA/mqdefault.jpg?v=64280e66&sqp=CIzjwaMG&rs=AOn4CLD0oW-iZmPVQKc1tRkf01nB-FyVYw",
        "https://i9.ytimg.com/vi/Bf3P_07WuOA/mqdefault.jpg?v=64280e66&sqp=CIzjwaMG&rs=AOn4CLD0oW-iZmPVQKc1tRkf01nB-FyVYw",
        "https://i9.ytimg.com/vi/Bf3P_07WuOA/mqdefault.jpg?v=64280e66&sqp=CIzjwaMG&rs=AOn4CLD0oW-iZmPVQKc1tRkf01nB-FyVYw",
        "https://i9.ytimg.com/vi/Bf3P_07WuOA/mqdefault.jpg?v=64280e66&sqp=CIzjwaMG&rs=AOn4CLD0oW-iZmPVQKc1tRkf01nB-FyVYw",
        "https://i9.ytimg.com/vi/Bf3P_07WuOA/mqdefault.jpg?v=64280e66&sqp=CIzjwaMG&rs=AOn4CLD0oW-iZmPVQKc1tRkf01nB-FyVYw"   
    ]

    const handleHoverVideo = (index) => {
        const video = document.querySelector('.videoItem' + index)
        video.style.boxShadow = '15px 15px 6px rgba(106, 105, 105, 0.2)'
        video.style.transform = 'translateY(-5px)'
    }

    const handleOutVideo = (index) => {
        const video = document.querySelector('.videoItem' + index)
        video.style.boxShadow = '3px 3px 2px rgba(106, 105, 105, 0.2)'
        video.style.transform = 'translateY(0px)'
    }
    const [handle, data] = useContext(Context)
    const menuItems = data.listGames

    return ( 
        <div id="videosReview" className="col-lg-12">
            <h1 className="titleVideosReview col-lg-12">Videos Review</h1>
            <div className="menuVideosReview col-lg-12">
                <div className="menu col-lg-8">
                    {menuItems.map((m,index) => (
                        <div onClick={() => handleClickMenu(index)} key={index} className={index != 0 ? 'menuItem menuItem'+index : 'menuItem active menuItem'+index}>
                            {m}
                        </div>
                    ))}
                </div>
            </div>
            <div className='menuVideosMobile'>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Video Games
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        {menuItems.map((m,index) => (
                            <li key={index}><a className="dropdown-item" href="#">{m}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="boxChildren"></div>
            <div className="boxChildren"></div>
            <div className="col-lg-12" style={{display:'flex', justifyContent : 'center'}}>
                <div className="col-lg-11 listVideoItem">
                    {image.map((item, index) => (
                        <div key={index} onMouseOut={() => handleOutVideo(index)} onMouseOver={() => handleHoverVideo(index)} className={"col-lg-3 videoItem videoItem" + index}>
                            <div className="col-lg-12 videoImage item">
                                <img src={item} width='100%' height="100%"  />
                            </div>
                            <div className='col-lg-12 videoDate item'>
                                <span className='title'>Date Submitted</span>
                                <span className='date'>Apr 6, 2023</span>
                            </div>
                            <div className='col-lg-12 item videoTitle'>
                                Tạo giao diện đăng ký với Java Swing - UI Design | CJ Coding (No Taking)
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div> 
    );
}

export default VideosReview;
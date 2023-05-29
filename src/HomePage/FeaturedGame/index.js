
import './featuredGame.scss'
import { useContext, useEffect } from 'react'
import Game from '../../ElementCustom/Game'
import { Link } from 'react-router-dom';
import { Context } from '../../UseContext/Context';

function FeaturedGame() {

    const featuredGames = [
        {
            image : "https://imgix.bustle.com/uploads/image/2021/11/30/5841de61-d963-419b-b466-22233037ff4e-03-2.jpg?w=400&h=400&fit=crop&crop=faces&auto=format%2Ccompress",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://is5-ssl.mzstatic.com/image/thumb/Video/v4/f5/54/ea/f554eae8-f7c7-2acf-f4ee-a796d491d87e/mzl.tdlbrroz.jpg/400x400bb.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://imgproxy7.tinhte.vn/maedY7eenghYbi23WfIY_sZ5Hl60W9YhhLpFYUTDD0c/rs:fill:400:400:0/plain/https://photo2.tinhte.vn/data/attachment-files/2018/12/4529439_Free_Download_Game_Far_Cry_3_Full_Crack.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://imgproxy7.tinhte.vn/maedY7eenghYbi23WfIY_sZ5Hl60W9YhhLpFYUTDD0c/rs:fill:400:400:0/plain/https://photo2.tinhte.vn/data/attachment-files/2018/12/4529439_Free_Download_Game_Far_Cry_3_Full_Crack.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://imgproxy7.tinhte.vn/maedY7eenghYbi23WfIY_sZ5Hl60W9YhhLpFYUTDD0c/rs:fill:400:400:0/plain/https://photo2.tinhte.vn/data/attachment-files/2018/12/4529439_Free_Download_Game_Far_Cry_3_Full_Crack.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://imgproxy7.tinhte.vn/maedY7eenghYbi23WfIY_sZ5Hl60W9YhhLpFYUTDD0c/rs:fill:400:400:0/plain/https://photo2.tinhte.vn/data/attachment-files/2018/12/4529439_Free_Download_Game_Far_Cry_3_Full_Crack.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        }

    ]

    const [handle] = useContext(Context)

    return ( 
        <div id="areaFeaturedGame">
            <h1 className="titleFeaturedGame col-lg-12">Featured Games</h1>
            <div style={{display:'flex',justifyContent: 'center'}}>
                <div className=" FeaturedGameRow col-lg-11">
                    {featuredGames.map((featuredGame,index) => {
                        return <Game key={index} featuredGame={featuredGame} index = {index} />
                    })}
                </div>
            </div>
            <div className='col-lg-12 btnFeaturedGame' style={{display:'flex',justifyContent: 'center'}}>
                <Link onClick={() => handle.handleScrollUp()} to='/list-games-page/all-games'><button>More Games</button></Link>
            </div>
        </div>
    );
}

export default FeaturedGame;
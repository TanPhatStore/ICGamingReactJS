
import './featuredGame.scss'
import { useEffect } from 'react'

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

    const handleMouseOver = (number) => {
        const logo = document.querySelector(".featuredGameLogo"+number)
        const site = document.querySelector(".site"+number)
        const smoothOut = document.querySelector('.gradientSmoothOut'+number)
        const smoothOver = document.querySelector('.gradientSmoothOver'+number)
        logo.style.top = '18%'
        site.style.opacity = '1'
        smoothOut.style.opacity = '0'
        smoothOver.style.opacity = '1'
    }

    const handleMouseOut = (number) => {
        const logo = document.querySelector(".featuredGameLogo"+number)
        const site = document.querySelector(".site"+number)
        const smoothOut = document.querySelector('.gradientSmoothOut'+number)
        const smoothOver = document.querySelector('.gradientSmoothOver'+number)
        logo.style.top = '30%'
        site.style.opacity = '0'
        smoothOut.style.opacity = '1'
        smoothOver.style.opacity = '0'
    }

    return ( 
        <div id="areaFeaturedGame">
            <br/>
            <br/>
            <br/>
            <h1 className="titleFeaturedGame col-lg-12">Featured Games</h1>
            <div style={{display:'flex',justifyContent: 'center'}}>
                <div className=" FeaturedGameRow col-lg-11">
                    {featuredGames.map((featuredGame,index) => (
                        <div key={index} onMouseOut={() => handleMouseOut(index)} onMouseOver={() => handleMouseOver(index)} className={"col-lg-3 featuredGame featuredGame"+index}>
                            <div className={'col-lg-12 gradientSmoothOut gradientSmoothOut'+index}></div>
                            <div className={'col-lg-12 gradientSmoothOver gradientSmoothOver'+index}></div>
                            <img className='featuredGameImage' src={featuredGame.image} width="100%"/>
                            <div className={'featuredGameLogo col-lg-5 featuredGameLogo'+index}>
                                <img width='100%' src={featuredGame.logo} />
                            </div>
                            <p className={'site site'+index}>Official Site</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='col-lg-12 btnFeaturedGame' style={{display:'flex',justifyContent: 'center'}}>
                <button>More Games</button>
            </div>
        </div>
    );
}

export default FeaturedGame;
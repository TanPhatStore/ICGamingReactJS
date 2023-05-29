

import './gamesRandom.scss'
import Game from '../../ElementCustom/Game'
import {useEffect, useRef} from 'react'

function GamesRandom() {

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        let currentIndex = shuffledArray.length;
      
        while (currentIndex > 0) {
          const randomIndex = Math.floor(Math.random() * currentIndex);
      
          currentIndex--;
      
          const temporaryValue = shuffledArray[currentIndex];
          shuffledArray[currentIndex] = shuffledArray[randomIndex];
          shuffledArray[randomIndex] = temporaryValue;
        }
      
        return shuffledArray;
    }

    const GamesRandom = [
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

    const shuffledGamesRandom = shuffleArray(GamesRandom);
    let x = 0
    let sliderGames = null
    let listGamesRandomRef = null
    useEffect(() => {
        const listGames = document.getElementsByClassName('featuredGame')
        listGamesRandomRef = document.querySelector('.listGamesRandom')
        sliderGames = setInterval(() => {
            let gameWidth = document.querySelector('.featuredGame').offsetWidth + parseFloat(window.getComputedStyle(document.querySelector('.featuredGame')).getPropertyValue("margin-left")) + parseFloat(window.getComputedStyle(document.querySelector('.featuredGame')).getPropertyValue("margin-right"))
            x += gameWidth
            listGamesRandomRef.style.transform= `translateX(${x * -1}px)`
            setTimeout (() => {
                listGamesRandomRef.style.transition = '0s'
                x = 0
                listGamesRandomRef.style.transform= `translateX(${x * -1}px)`
                listGamesRandomRef.appendChild(listGames[0])
            }, 500)
            listGamesRandomRef.style.transition = '0.5s'
        },3000)

        return () => {
            clearInterval(sliderGames)
        }
    },[])

    const handleMouseOverButton = (btnType) => {
        const btn = document.querySelector('.' + btnType)
        btn.style.backgroundColor= 'rgba(185, 185, 185,0.8)'
    }
    const handleMouseOutButton = (btnType) => {
        const btn = document.querySelector('.' + btnType)
        btn.style.backgroundColor= 'rgba(185, 185, 185,0.3)'
    }
    let status = true
    const handleClickButton = (btnType) => {
        if (status == true) {
            status = false
            if (btnType == 'btnRight') {
                clearInterval(sliderGames)
                const listGames = document.getElementsByClassName('featuredGame')
                let gameWidth = document.querySelector('.featuredGame').offsetWidth + parseFloat(window.getComputedStyle(document.querySelector('.featuredGame')).getPropertyValue("margin-left")) + parseFloat(window.getComputedStyle(document.querySelector('.featuredGame')).getPropertyValue("margin-right"))
                x += gameWidth
                listGamesRandomRef.style.transform= `translateX(${x * -1}px)`
                setTimeout (() => {
                    listGamesRandomRef.style.transition = '0s'
                    x = 0
                    listGamesRandomRef.style.transform= `translateX(${x * -1}px)`
                    listGamesRandomRef.appendChild(listGames[0])
                }, 500)
                listGamesRandomRef.style.transition = '0.5s'
    
                sliderGames = setInterval(() => {
                    let gameWidth = document.querySelector('.featuredGame').offsetWidth + parseFloat(window.getComputedStyle(document.querySelector('.featuredGame')).getPropertyValue("margin-left")) + parseFloat(window.getComputedStyle(document.querySelector('.featuredGame')).getPropertyValue("margin-right"))
                    x += gameWidth
                    listGamesRandomRef.style.transform= `translateX(${x * -1}px)`
                    setTimeout (() => {
                        listGamesRandomRef.style.transition = '0s'
                        x = 0
                        listGamesRandomRef.style.transform= `translateX(${x * -1}px)`
                        listGamesRandomRef.appendChild(listGames[0])
                    }, 500)
                    listGamesRandomRef.style.transition = '0.5s'
                },3000)
                setTimeout(() => {status = true},500)
            } else if (btnType == 'btnLeft') {
                clearInterval(sliderGames)
                const listGames = document.getElementsByClassName('featuredGame')
                let gameWidth = document.querySelector('.featuredGame').offsetWidth + parseFloat(window.getComputedStyle(document.querySelector('.featuredGame')).getPropertyValue("margin-left")) + parseFloat(window.getComputedStyle(document.querySelector('.featuredGame')).getPropertyValue("margin-right"))
                
                listGamesRandomRef.style.transition = '0s'
                x += gameWidth
                listGamesRandomRef.style.transform= `translateX(${x * -1}px)`
                listGamesRandomRef.insertBefore(listGames[listGames.length-1], listGames[0])
    
                setTimeout (() => {
                    listGamesRandomRef.style.transition = '0.5s'
                    x= 0
                    listGamesRandomRef.style.transform= `translateX(${x}px)`
                }, 50)
    
                sliderGames = setInterval(() => {
                    let gameWidth = document.querySelector('.featuredGame').offsetWidth + parseFloat(window.getComputedStyle(document.querySelector('.featuredGame')).getPropertyValue("margin-left")) + parseFloat(window.getComputedStyle(document.querySelector('.featuredGame')).getPropertyValue("margin-right"))
                    x += gameWidth
                    listGamesRandomRef.style.transform= `translateX(${x * -1}px)`
                    setTimeout (() => {
                        listGamesRandomRef.style.transition = '0s'
                        x = 0
                        listGamesRandomRef.style.transform= `translateX(${x * -1}px)`
                        listGamesRandomRef.appendChild(listGames[0])
                    }, 500)
                    listGamesRandomRef.style.transition = '0.5s'
                },3000)
                setTimeout(() => {status = true},500)
            }
        }

    } 

    return ( 
        <div className='wrapperGamesRandom col-lg-12' style={{overflow:'hidden'}}>
            <div id="gamesRandom" className='col-lg-9'>
                <div className='listGamesRandom'>
                    {shuffledGamesRandom.map((GameRandom,index) => (<Game key={index} featuredGame={GameRandom} index = {index}/>))}
                </div>
            </div>
            <button onClick={()=>handleClickButton('btnLeft')} onMouseOver={() => handleMouseOverButton('btnLeft')} onMouseOut={() => handleMouseOutButton('btnLeft')} className='btnLeft'><i className='bx bxs-left-arrow'></i></button>
            <button onClick={()=>handleClickButton('btnRight')} onMouseOver={() => handleMouseOverButton('btnRight')} onMouseOut={() => handleMouseOutButton('btnRight')} className='btnRight'><i className='bx bxs-right-arrow'></i></button>
        </div>
     );
}

export default GamesRandom;


import './gameDetailPage.scss'
import {useEffect, useRef} from 'react'
import GamesRandom from '../ListGamesPage/GamesRandom'
import $ from 'jquery'
import logo_gg_drive from '../ggdrivelogo.png'
import logo from '../icgaming.png'
import logoCVB from '../vcb.webp'
import logoMomo from '../momo.png'
import logoZalo from '../zalo.webp'
import YouTube from 'react-youtube';

function GameDetailPage({game}) {

    let handleChangeSlide = useRef()
    let x = 0
    let index = 0
    let listGames = useRef()


    const listImages = game.images


    useEffect(() => {
        handleChangeSlide = setInterval(() => {
            if (index < listImages.length - 1) {
                x += document.querySelector('.imageGameItem').offsetWidth
                listGames.current.style.transform = `translateX(${x * -1}px)`
                index ++
            } else {
                x = 0
                listGames.current.style.transform = `translateX(${x * -1}px)`
                index = 0
            }
            
        }, 5000)

        return () => clearInterval(handleChangeSlide)
    },[])

    let status = true;
    const handleChangeNext = () => {
        if (status == true) {
            status = false
            clearInterval(handleChangeSlide)
            if (index < listImages.length - 1) {
                x += document.querySelector('.imageGameItem').offsetWidth
                listGames.current.style.transform = `translateX(${x * -1}px)`
                index ++
            } else {
                x = 0
                listGames.current.style.transform = `translateX(${x * -1}px)`
                index = 0
            }   
            handleChangeSlide = setInterval(() => {
                if (index < listImages.length - 1) {
                    x += document.querySelector('.imageGameItem').offsetWidth
                    listGames.current.style.transform = `translateX(${x * -1}px)`
                    index ++
                } else {
                    x = 0
                    listGames.current.style.transform = `translateX(${x * -1}px)`
                    index = 0
                }
                
            }, 5000)
            setTimeout(() => {status = true}, 500)
        }
    }

    const handleChangePrev = () => {
        if (status == true) {
            status = false
            clearInterval(handleChangeSlide)
            if (index > 0) {
                x -= document.querySelector('.imageGameItem').offsetWidth
                listGames.current.style.transform = `translateX(${x * -1}px)`
                index --
            } else {
                x = document.querySelector('.imageGameItem').offsetWidth * (listImages.length - 1)
                listGames.current.style.transform = `translateX(${x * -1}px)`
                index = listImages.length - 1
            }   
            handleChangeSlide = setInterval(() => {
                if (index < listImages.length - 1) {
                    x += document.querySelector('.imageGameItem').offsetWidth
                    listGames.current.style.transform = `translateX(${x * -1}px)`
                    index ++
                } else {
                    x = 0
                    listGames.current.style.transform = `translateX(${x * -1}px)`
                    index = 0
                }
                
            }, 5000)
            setTimeout(() => {status = true}, 500)
        }
    }

    const handleClickDownload = () => {
        $('.opa').css('display', 'block')
        $('#modalDownload').css('top', '25%')
    }

    const handleClickDonate = () => {
        $('.opa').css('display', 'block')
        $('#modalDonate').css('top', '25%')
    }

    const handleClickExit = () => {
        $('.opa').css('display', 'none')
        $('#modalDownload').css('top', '-100%')
        $('#modalDonate').css('top', '-1000%')
    }

    const opts = {
        width: '100%',
        height : '400px'
    };

    return ( 
        <div className='gameDetail'>
            <div className='boxParent box1'></div>
            <div className='boxChildren box2'></div>
            <div className='col-lg-12 gameInfo '>
                <div id='infoPC' className='col-lg-4 info item'>
                    <div className='col-lg-12 title'>
                        {game.title + '  ('+ game.gameType +')'}
                    </div>
                    <div className='col-lg-12 detailInfo'>
                        <div className='col-lg-12 gender detailItem' >
                            Thể Loại : {game.gender}
                        </div>
                        <div className='col-lg-12 capacity detailItem'>
                            Dung Lượng : {game.capacity}
                        </div>
                        <div className='col-lg-12 numberUser detailItem'>
                            Số Người Chơi : {game.numberUser}
                        </div>
                        <div className='col-lg-12 ram detailItem'>
                            RAM Tối Thiểu : {game.ram}
                        </div>
                        <div className='col-lg-12 language detailItem'>
                            Ngôn Ngữ : {game.language}
                        </div>
                    </div>
                    <div className='btns'>
                        <button onClick={() => handleClickDownload()} className='button btnDownload'>Download For Free</button>
                        <button onClick={() => handleClickDonate()} className='button btnDonate'>Donate</button>
                    </div>
                    
                </div>
                <div className='col-lg-6 col-11 images item'>
                    <div className='listGames' ref={listGames}>
                        {listImages.map ((image, index) => (
                            <img className='imageGameItem' key={index} src={image}  width='100%' />
                        ))}
                    </div>
                    <button onClick={() => handleChangePrev()} className='button buttonPrev'><i className='bx bxs-left-arrow'></i></button>
                    <button onClick={() => handleChangeNext()} className='button buttonNext'><i className='bx bxs-right-arrow'></i></button>
                </div>
                <div id='infoMobile' className='col-lg-4 col-11 info item'>
                    <div className='col-lg-12 title'>
                        {game.title + '  ('+ game.gameType +')'}
                    </div>
                    <div className='col-lg-12 detailInfo'>
                        <div className='col-lg-12 gender detailItem' >
                            Thể Loại : {game.gender}
                        </div>
                        <div className='col-lg-12 capacity detailItem'>
                            Dung Lượng : {game.capacity}
                        </div>
                        <div className='col-lg-12 numberUser detailItem'>
                            Số Người Chơi : {game.numberUser}
                        </div>
                        <div className='col-lg-12 ram detailItem'>
                            RAM Tối Thiểu : {game.ram}
                        </div>
                        <div className='col-lg-12 language detailItem'>
                            Ngôn Ngữ : {game.language}
                        </div>
                    </div>
                    <div className='btns'>
                        <button onClick={() => handleClickDownload()} className='button btnDownload'>Download Free</button>
                        <button onClick={() => handleClickDonate()} className='button btnDonate'>Donate</button>
                    </div>
                    
                </div>
            </div>
            <div className='boxParent'></div>
            


            <div className='col-lg-12 col-12 video_des'>
                <div className='video col-lg-6 col-11'>
                    <YouTube videoId={game.video} opts={opts}  />
                </div>
                <div className='col-lg-4 col-11  des'>
                    <h3>Giới Thiệu</h3>
                    <div className='description'>
                        {game.description}
                    </div>
                </div>
            </div>
            <div className='boxParent'></div>
            <div className='col-lg-12 col-12 video_get video_des'>
                <div className='col-lg-4 col-11  des'>
                    <h3>Cách Lấy Link Download Game</h3>
                    <div className='description'>
                        <p>Đây là cách để mà mình tạo ra kinh phí để tiếp tục phát triển kênh</p>
                        <p>Mình mong các bạn chịu khó dành ra giúp mình khoảng 30 giây thao tác để lấy link download để ủng hộ mình nhé ❤️❤️</p>
                        <p>Xin Cảm Ơn !!!!</p>
                    </div>  
                </div>
                <div className='video col-lg-6 col-11'>
                    <YouTube videoId='d5YASqJnjRY' opts={opts}  />
                </div>
            </div>






            <div className='boxParent'></div>      
            <GamesRandom />
            <div className='boxParent'></div> 
            <div className='opa'></div>
            <div id='modalDownload' className='modal1'>
                <div className='col-lg-12 row' style={{display:'flex', justifyContent: 'center'}}>
                    <div className='col-lg-4 logo'>
                        <img src={game.logo} width='90%'/>
                    </div>
                    <div className='col-lg-8 buttons'>
                        {game.linksDownload.map((link, index) => (
                            <button key={index} className='col-lg-5'><a target="_blank" href={link}>
                                {game.linksDownload.length == 1 ? 'Main' : 'Part' + (index + 1)} <img src={logo_gg_drive} height='70%'/>
                            </a></button>
                        ))}
                    </div>
                    <button onClick={() => handleClickExit()} className='btnExit'><i className='bx bxs-x-square'></i></button>
                </div>
            </div>
            <div id='modalDonate' className='modal1'>
                <div className='col-lg-12 row' style={{display:'flex', justifyContent: 'center'}}>
                    <div className='col-lg-5 logo'>
                        <img src={logo} width='90%'/>
                    </div>
                    <div className='col-lg-6 donates'>
                        <p className='col-lg-11 donate'><img src={logoCVB} height='70%'/>  0281000625860</p> 
                        <p className='col-lg-11 donate'><img src={logoMomo} height='70%'/>  0902491471</p> 
                        <p className='col-lg-11 donate'><img src={logoZalo} height='70%'/>  0902491471</p> 
                        

                    </div>
                    <button onClick={() => handleClickExit()} className='btnExit'><i className='bx bxs-x-square'></i></button>
                </div>               
            </div>
        </div>
    );
}

export default GameDetailPage;
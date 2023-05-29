

import './gameDetailPage.scss'
import {useEffect, useRef} from 'react'
import GamesRandom from '../ListGamesPage/GamesRandom'
import $ from 'jquery'
import logo_gg_drive from '../ggdrivelogo.png'
import logo from '../icgaming.png'
import logoCVB from '../vcb.webp'
import logoMomo from '../momo.png'
import logoZalo from '../zalo.webp'

function GameDetailPage() {

    let handleChangeSlide = null
    let x = 0
    let index = 0
    let listGames = useRef()

    const listImages = [
        "https://pitch-magnesium-3af.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba1ac598-308f-4e9f-b27d-caa38202a528%2FNhiu_mu_sc_Ha_tit_v_Hnh_dng_Tru_tng_Li_chc_mng_Bn_thn_nht_Bn_thuyt_trnh_Vui_nhn_(10).png?table=block&id=b8cad322-db1e-447e-b14e-ff50e24ae579&spaceId=1a67c586-9ae3-4ad1-b17c-dc8466c4cac0&width=2000&userId=&cache=v2",
        "https://pitch-magnesium-3af.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba1ac598-308f-4e9f-b27d-caa38202a528%2FNhiu_mu_sc_Ha_tit_v_Hnh_dng_Tru_tng_Li_chc_mng_Bn_thn_nht_Bn_thuyt_trnh_Vui_nhn_(10).png?table=block&id=b8cad322-db1e-447e-b14e-ff50e24ae579&spaceId=1a67c586-9ae3-4ad1-b17c-dc8466c4cac0&width=2000&userId=&cache=v2",
        "https://pitch-magnesium-3af.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba1ac598-308f-4e9f-b27d-caa38202a528%2FNhiu_mu_sc_Ha_tit_v_Hnh_dng_Tru_tng_Li_chc_mng_Bn_thn_nht_Bn_thuyt_trnh_Vui_nhn_(10).png?table=block&id=b8cad322-db1e-447e-b14e-ff50e24ae579&spaceId=1a67c586-9ae3-4ad1-b17c-dc8466c4cac0&width=2000&userId=&cache=v2",
        "https://pitch-magnesium-3af.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba1ac598-308f-4e9f-b27d-caa38202a528%2FNhiu_mu_sc_Ha_tit_v_Hnh_dng_Tru_tng_Li_chc_mng_Bn_thn_nht_Bn_thuyt_trnh_Vui_nhn_(10).png?table=block&id=b8cad322-db1e-447e-b14e-ff50e24ae579&spaceId=1a67c586-9ae3-4ad1-b17c-dc8466c4cac0&width=2000&userId=&cache=v2"
    ]


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
        $('#modalDownload').css('top', '-40%')
        $('#modalDonate').css('top', '-40%')
    }

    return ( 
        <div className='gameDetail'>
            <div className='boxParent'></div>
            <div className='col-lg-12 gameInfo'>
                <div className='col-lg-4 info item'>
                    <div className='col-lg-12 title'>
                        GTA San Andreas Definitive Edition (Game PC)
                    </div>
                    <div className='col-lg-12 detailInfo'>
                        <div className='col-lg-12 gender detailItem' >
                            Thể Loại : Game Cướp Đường Phố, Game Hành Động, Game Bắn Súng, Game Phiêu Lưu
                        </div>
                        <div className='col-lg-12 capacity detailItem'>
                            Dung Lượng : 20GB
                        </div>
                        <div className='col-lg-12 numberUser detailItem'>
                            Số Người Chơi : Chơi Đơn
                        </div>
                        <div className='col-lg-12 ram detailItem'>
                            RAM Tối Thiểu : 8GB
                        </div>
                        <div className='col-lg-12 language detailItem'>
                            Ngôn Ngữ : Tiếng Anh
                        </div>
                    </div>
                    <div className='btns'>
                        <button onClick={() => handleClickDownload()} className='button btnDownload'>Download For Free</button>
                        <button onClick={() => handleClickDonate()} className='button btnDonate'>Donate</button>
                    </div>
                    
                </div>
                <div className='col-lg-6 images item'>
                    <div className='listGames' ref={listGames}>
                        {listImages.map ((image, index) => (
                            <img className='imageGameItem' key={index} src={image}  width='100%' />
                        ))}
                    </div>
                    <button onClick={() => handleChangePrev()} className='button buttonPrev'><i className='bx bxs-left-arrow'></i></button>
                    <button onClick={() => handleChangeNext()} className='button buttonNext'><i className='bx bxs-right-arrow'></i></button>
                </div>
            </div>
            <div className='boxParent'></div>
            <div className='boxChildren'></div>
            <h1></h1>
            <GamesRandom />
            <div className='opa'></div>
            <div id='modalDownload' className='modal1'>
                <div className='col-lg-12 row' style={{display:'flex', justifyContent: 'center'}}>
                    <div className='col-lg-4 logo'>
                        <img src='https://www.pngmart.com/files/22/Grand-Theft-Auto-San-Andreas-Logo-PNG-Isolated-HD.png' width='90%'/>
                    </div>
                    <div className='col-lg-8 buttons'>
                        <button className='col-lg-5'><a target="_blank" href='https://ducvu0sdsd.github.io/IC-gaming-downloadgame/GTA%20SAN/gtasantrilogy.html'>
                            Part 1 <img src={logo_gg_drive} height='70%'/>
                        </a></button>
                        <button className='col-lg-5'><a target="_blank" href='https://ducvu0sdsd.github.io/IC-gaming-downloadgame/GTA%20SAN/gtasantrilogy.html'>
                            Part 1 <img src={logo_gg_drive} height='70%'/>
                        </a></button>
                        <button className='col-lg-5'><a target="_blank" href='https://ducvu0sdsd.github.io/IC-gaming-downloadgame/GTA%20SAN/gtasantrilogy.html'>
                            Part 1 <img src={logo_gg_drive} height='70%'/>
                        </a></button>
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
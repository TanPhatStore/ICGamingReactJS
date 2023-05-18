
import './slider.scss'
import { useEffect, useRef } from 'react'

function Slider() {
    let cateIndex1= 0
    let cateIndex2 = 0
    const imagesPC =[
        {
            image : "https://wallpaperaccess.com/full/2553218.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/review/game/game-valheim-pc-the-loai-sinh-ton-hoang-da.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://img4.thuthuatphanmem.vn/uploads/2020/08/27/anh-nen-game-cho-may-tinh_061012920.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://www.phucanh.vn/media/news/2502_top-5-tua-game-pc-ma-game-thu-nao-cung-nen-trai-nghiem-1.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://jmb.com.vn/wp-content/uploads/2020/12/gta-v-roleplay-game-hanh-dong-danh-rieng-cho-pc-suc-hut-khong-the-ha-nhiet-huong-dan-gta-v-roleplay.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://genk.mediacdn.vn/2016/1-1481536595671.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        }
    ]
    const imagesMobile = [
        {
            image : "https://www.pcinvasion.com/wp-content/uploads/2022/06/minecraft-legends-action-strategy-game-pc-2023-game-pass.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://media.maybe.vn/attachments/god-of-war-2018-pc-port-jpg.20513/",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8BrHuZoAREpZ3cZCf-MbzzMZQS0PrnRDJ6AFZzO2ctbZeQwqSNiBcjIYHrPWgLCDLAVMCT5BposDXaQHSg9rA_EWVveCexVgjF4Mlv8zSRjnkQcX-l_QFGEMctK_pGPuev2gkGkDUeKchTDPNjwaTiGqtqeUFlXBVKz0IXpvd-vilkSVuuaU48pQIGA/s1920/metallic-child-viet-hoa-aowvn-umu-game-pc.png",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://gazettely.com/wp-content/uploads/2022/07/Hogwarts-Legacy-2.jpeg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        },
        {
            image : "https://daominhha.net/wp-content/uploads/2022/03/egs-strangerofparadisefinalfantasyorigin-koeitecmogamescoltd-g1a-02-1920x1080-8896ec43df11.jpg",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg/1200px-Grand_Theft_Auto_San_Andreas_-_The_Definitive_Edition_logo.svg.png"
        }
    ]
    const sliderRef = useRef()
    const bannerRef1 = useRef()
    const bannerRef2 = useRef()
    let listBanner1 = document.getElementsByClassName('banner1')
    let listBanner2 = document.getElementsByClassName('banner2')
    let cateItems1 = document.getElementsByClassName('cateItem1')
    let cateItems2 = document.getElementsByClassName('cateItem2')
    let valueSlider1 = 0
    let valueSlider2 = 0
    let cateSlider1 = 0
    let cateSlider2 = 0
    let changeSlider = () => {}
    let sliding = () => {}
    let isAllowChange1 = true
    let isAllowChange2 = true
    let size = 0

    useEffect (() => {
        sliding = (bannerRef,listBanner, valueSlider, cateIndex, number, time) => {
            for (let i =0 ; i< number; i++) {
                bannerRef.current.style.transition = '0.8s'
                size = sliderRef.current.offsetWidth
                valueSlider += size
                bannerRef.current.style.transform = `translateX(${-valueSlider}px)`
                if (cateIndex == 1) {
                    if (cateIndex1 == listBanner.length - 1) {
                        cateIndex1=0
                    } else {
                        cateIndex1++;
                    }
                    document.querySelector('.active1').classList.remove('active1')
                    cateItems1[cateIndex1].classList.add('active1')
                } else {
                    if (cateIndex2 == listBanner.length - 1) {
                        cateIndex2=0
                    } else {
                        cateIndex2++;
                    }
                    document.querySelector('.active2').classList.remove('active2')
                    cateItems2[cateIndex2].classList.add('active2')
                }
        
                setTimeout(()=> {
                    bannerRef.current.style.transition = '0s'
                    valueSlider = 0
                    bannerRef.current.style.transform = `translateX(${-valueSlider}px)`
                    bannerRef.current.appendChild(listBanner[0])
                    isAllowChange1 = true
                    isAllowChange2 = true
                },time)
            }
        }
        changeSlider = setInterval(() => {
            sliding(bannerRef1, listBanner1, valueSlider1, 1, 1, 1000)
            sliding(bannerRef2, listBanner2, valueSlider2, 2, 1, 1000)
        }, 4500)

        return () => {
            clearInterval(changeSlider)
        }
    }, [])

    const handleClickCateSlider1 = () => {
        clearInterval(changeSlider)
        let i = 0
        if (cateSlider1 < cateIndex1) {
            i = listBanner1.length - (cateIndex1 - cateSlider1)
        } else {
            i = cateSlider1 - cateIndex1
        }
        sliding(bannerRef1, listBanner1, valueSlider1, 1, i, 1000)
        changeSlider = setInterval(() => {
            sliding(bannerRef1, listBanner1, valueSlider1, 1, 1, 1000)
            sliding(bannerRef2, listBanner2, valueSlider2, 2, 1, 1000)
        }, 4500)
    }

    const handleClickCateSlider2 = () => {
        clearInterval(changeSlider)
        let i = 0
        if (cateSlider2 < cateIndex2) {
            i = listBanner2.length - (cateIndex2 - cateSlider2)
        } else {
            i = cateSlider2 - cateIndex2
        }
        sliding(bannerRef2, listBanner2, valueSlider2, 2, i, 1000)
        changeSlider = setInterval(() => {
            sliding(bannerRef1, listBanner1, valueSlider1, 1, 1, 1000)
            sliding(bannerRef2, listBanner2, valueSlider2, 2, 1,)
        }, 4500)
    }

    const handleMouseOver = (number) => {
        const logoGames = document.querySelectorAll('.logoGame' + number)
        const bannerImage = document.querySelector('.bannerImage' + number)
        logoGames.forEach(logo => {
            logo.style.height = '100%'
            logo.style.top = '0%'
            logo.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))'
            logo.querySelector('.image').style.height = '50%'
            logo.querySelector('.image').style.width = '50%'
            logo.querySelector('.image').style.marginTop = '8%'
        })
    }

    const handleMouseOut = (number) => {
        const logoGames = document.querySelectorAll('.logoGame' + number)
        const bannerImage = document.querySelector('.bannerImage' + number)
        logoGames.forEach(logo => {
            logo.style.height = '120px'
            logo.style.top = '50%'
            logo.style.background = '0'
            logo.querySelector('.image').style.height = '120px'
            logo.querySelector('.image').style.width = '120px'
            logo.querySelector('.image').style.marginTop = '0'
        })
    }

    return (<div style={{display:'flex', justifyContent:'center'}}>
        <div className="col-lg-12 sliders">
            <div ref={sliderRef} className="slider col-lg-5">
                <div ref={bannerRef1} className='listBanner'>
                    {imagesPC.map((image, index) => (
                        <div onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut(1)} key={index} className='banner banner1 col-lg-12'>
                            <img className='bannerImage1 bannerImage'   src={image.image} width='100%' height='100%' />
                            <div className='logoGame1 logoGame'>
                                <div className='image'> 
                                    <img src={image.logo} height={'100%'}/>
                                    <button type="button" className="btn btn-danger">Download Game</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='cateSliderParent'>
                    {imagesPC.map ((m,index) => (<div key={index} onClick={() => {
                        if (isAllowChange1 === true) {
                            isAllowChange1 = false
                            cateSlider1 = index; 
                            handleClickCateSlider1()
                        }
                    }} className={index == 0 ? 'cateItem cateItem1 active1' : 'cateItem cateItem1'} > </div>))}
                </div>
            </div> 
            <div className="slider col-lg-5">
                <div ref={bannerRef2} className='listBanner'>
                    {imagesMobile.map((image, index) => (
                        <div onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut(2)} key={index} className='banner banner2 col-lg-12'>
                        <img className='bannerImage2'   src={image.image} width='100%' height='100%' />
                        <div className='logoGame2 logoGame'>
                            <div  className='image'> 
                                <img src={image.logo} height={'100%'}/>
                                <button type="button" className="btn btn-danger">Download Game</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className='cateSliderParent'>
                    {imagesMobile.map ((m,index) => (<div key={index} onClick={() => {
                        if (isAllowChange2 === true) {
                            isAllowChange2 = false
                            cateSlider2 = index; 
                            handleClickCateSlider2()
                        }
                    }} className={index == 0 ? 'cateItem cateItem2 active2' : 'cateItem cateItem2'}> </div>))}
                </div>
            </div> 
        </div>   
    </div>);
}

export default Slider;
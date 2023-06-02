
import './footer.scss'
import logo from '../icgaming.png'

function Footer() {

    const footerItem =  ['']

    return ( 
        <div className="wrapperFooter">
                <div className="logo col-lg-1 col-1">
                    <img src={logo} height="100%" />
                </div>
                <div className="footer col-lg-7 col-12">
                    <div className="col-lg-2 col-3 chooseFooter">
                        <p>Games Library</p>
                    </div>
                    <div className="col-lg-2 col-3 chooseFooter">
                        <p>Action Games</p>
                    </div>
                    <div className="col-lg-2 col-3 chooseFooter">
                        <p>Fighting Games</p>
                    </div>
                    <div className="col-lg-2 col-3  chooseFooter">
                        <p>Family Games</p>
                    </div>
                    <div className="col-lg-12" style={{display:'flex', justifyContent : 'center',marginBottom : '20px'}}>
                        <div className="col-lg-8 col-7 aboutMe">
                            IC GAMING DOWNLOAD Là Wed Site Tải Game Link Google Drive Miễn Phí, Tốt Độ Cao Bao Gồm : Game Gốc , Game MODS , Game Việt Hóa Nhầm Giúp Cho Người Chơi Có Trải Nghiệm Tốt Nhất Khi Chơi
                        </div>
                        <div  className="col-lg-4 col-4 contact" >
                            <div className="col-lg-12 icon">
                                <i className='bx bxl-youtube'></i> <i className='bx bxl-instagram-alt' ></i> <i className='bx bxl-facebook-circle' ></i>
                            </div>
                            <div className="col-lg-12 copyRight">
                                © 2023 IC Gaming Inc.
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     );
}

export default Footer;
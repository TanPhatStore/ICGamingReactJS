
import './gameOfList.scss'

function GameOfList() {
    return ( 
        <div className= 'col-lg-5 gameOfList'>
            <div className='col-lg-12 gameImage'>
                <img width= '100%' src = "https://media.contentapi.ea.com/content/dam/eacom/common/eacom-coming-soon-smb4-featured-image-16x9.jpg.adapt.crop16x9.1455w.jpg"/>
            </div>
            <div className='col-lg-12 gameInfo'>
                <div className='title col-lg-12'>
                    Super Mega Baseball™ 4
                </div>
                <div className='col-lg-12 updateDate' style={{display:'flex'}}>
                    <p className='key'>Update Date </p>
                    <p className='value'>: May 28, 2023</p>
                </div>
                <div className='col-lg-12 gender' style={{display:'flex'}}>
                    <p className='key'>Gender </p>
                    <p className='value'>: Hành Động, Bắn Súng</p>
                </div>
                <button>Offcial Site</button>
            </div>
        </div>
     );
}

export default GameOfList;
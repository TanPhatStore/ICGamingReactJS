

import './listGame.scss'
import GameOfList from '../../ElementCustom/GameOfList';

function ListGames() {
    return ( 
        <div className="col-lg-12 wrapperListGames" style={{display:'flex', justifyContent : 'center'}}>
            <div className='col-lg-9 listGames' style={{display:'flex', justifyContent : 'center', flexWrap: 'wrap'}}>
                <GameOfList />
                <GameOfList />
                <GameOfList />
                <GameOfList />
                <GameOfList />
                <GameOfList />
            </div>
        </div>
    );
}

export default ListGames;
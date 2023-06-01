

import './listGame.scss'
import GameOfList from '../../ElementCustom/GameOfList';
import { useContext } from 'react';
import {Context} from '../../UseContext/Context'

function ListGames({typeGame}) {

    const [handle, data] = useContext(Context)
    const games = []
    if (typeGame == 'all-games') {
        data.games.forEach((game , index) => {
            games.push(game)
        })
    } else {
        data.games.forEach((game , index) => {
            if(game.series.toLowerCase().split(' ').join('-') == typeGame) {
                games.push(game)
            }
        })
    }

    return ( 
        <div className="col-lg-12 wrapperListGames" style={{display:'flex', justifyContent : 'center'}}>
            <div className='col-lg-9 listGames' style={{display:'flex', justifyContent : 'center', flexWrap: 'wrap'}}>
                {games.map((game , index) => {
                    return <GameOfList key={index} game = {game} />
                })}
            </div>
        </div>
    );
}

export default ListGames;

import './featuredGame.scss'
import { useContext } from 'react'
import Game from '../../ElementCustom/Game'
import { Link } from 'react-router-dom';
import { Context } from '../../UseContext/Context';

function FeaturedGame({games}) {

    
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
    const gamesArr = shuffleArray(games)

    const featuredGames = gamesArr.map(game => {
        return {
            url : `/games/${game.title.toLowerCase().split(' ').join('-')}`,
            image : game.logoSite,
            logo : game.logo
        }
    })

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
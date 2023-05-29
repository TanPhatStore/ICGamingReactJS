
import Slider from './Slider';
import FeaturedGame from './FeaturedGame';
import VideosReview from './VideosReview'
import './homePage.scss'

function HomePage () {
    return ( <div id='HomePage'>
        <Slider />
        <div className='boxParent'></div>
        <FeaturedGame />
        <div className='boxParent'></div>
        <VideosReview />
        <div className='boxParent'></div>
    </div>
     );
}

export default HomePage;
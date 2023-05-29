import { Context } from "./Context";

function Provider({children}) {

    let handle = {
        handleScrollDown : () => {
            window.scrollTo(
                0,  document.documentElement.scrollHeight)
        },
        handleScrollUp : () => {
            window.scrollTo({top: 0, behavior : 'smooth'})
        },
    }

    let data = {
        listGames : ['GTA', 'Far Cry', 'Naruto Shippudent', 'Dragon Ball', 'Plant vs Zombies'],
        listGamesPC : ['GTA', 'Far Cry', 'Naruto Shippudent', 'Dragon Ball'],
        listGamesMobile : ['Dragon Ball', 'Plant vs Zombies']
        
    }

    return ( 
        <Context.Provider value={[handle, data]}>
            {children}
        </Context.Provider>
     );
}

export default Provider;
import { useEffect, useState } from "react";
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

    const [games, setGames] = useState([])
    useEffect(() => {
        fetch('https://ic-gaming-api-v1.vercel.app/')
        .then (res => res.json())
        .then (d => setGames(d))
    }, [])

    const listGames = []
    const listGamesPC = []
    const listGamesMobile = []
    const PCLogo = []
    const MOLogo = []
    games.forEach(game => {
        let isHave = false
        let isHavePC = false
        let isPC = false
        let isMobile = false
        let isHaveMobile = false
        for (let i = 0 ; i < games.length; i++){
            if (game.series == listGames[i])
                isHave = true
            if (game.gameType == 'Game PC')
                isPC = true
                if (game.series == listGamesPC[i])
                    isHavePC = true
            if (game.gameType == 'Game Mobile')
                isMobile = true
                if (game.series == listGamesMobile[i])
                    isHaveMobile = true
        }
        if (isHave == false)
            listGames.push(game.series)
        if (isHavePC == false && isPC == true){
            listGamesPC.push(game.series)
            PCLogo.push(game.logo)
        }
        if (isHaveMobile == false && isMobile == true) {
            listGamesMobile.push(game.series)
            MOLogo.push(game.logo)
        }
    })

    let data = {
        listGames,
        listGamesPC,
        listGamesMobile,
        games,
        PCLogo,
        MOLogo
    }

    return ( 
        <Context.Provider value={[handle, data]}>
            {children}
        </Context.Provider>
     );
}

export default Provider;
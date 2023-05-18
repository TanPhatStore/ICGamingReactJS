import { Context } from "./Context";

function Provider({children}) {

    let value = {
        cateIndex1 : 1,
        cateIndex2 : 1  
    }

    return ( 
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
     );
}

export default Provider;
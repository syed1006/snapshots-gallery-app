import { useState } from "react";
import AppContext from "./AppContext"

const AppState = (props)=>{
    const [state, setState] = useState({theme: false, search: null})
    function updateTheme(){
        if(state.theme){
            document.body.style.backgroundColor = '#b5d4f7'
        }else{
            document.body.style.backgroundColor = 'rgb(45, 45, 45)'
        }
        setState({...state, theme: !state.theme});
    }
    function updateSearch(value){
        setState({...state, search: value});
    }
    return(
        <AppContext.Provider value={{state, updateTheme, updateSearch}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppState;
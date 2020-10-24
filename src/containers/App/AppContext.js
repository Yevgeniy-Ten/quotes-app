import React, {useContext, useReducer} from "react";
import {AppReducer} from "./AppReducer";
import {HIDE_ALERT, HIDE_LOAD, SHOW_ALERT, SHOW_LOAD} from "./AppTypes";

const AppContext = React.createContext()
export const useApp = () => useContext(AppContext)

const initialState = {
    alertIsShow: true,
    isLoad: false,
}
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const showAlert = (alertTitle, alertType = "warning") => {
        dispatch({
            type: SHOW_ALERT,
            payload: {alertTitle, alertType}
        })
    }
    const hideAlert = () => {
        dispatch({
            type: HIDE_ALERT,
        })
    }
    const showLoad = () => {
        dispatch({
            type: SHOW_LOAD,
        })
    }
    const hideLoad = () => {
        dispatch({
            type: HIDE_LOAD,
        })
    }
    return <AppContext.Provider value={{state, hideAlert, showAlert, showLoad, hideLoad}}>
        {children}
    </AppContext.Provider>
}
export default AppProvider
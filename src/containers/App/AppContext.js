import React, {useContext, useReducer} from "react";
import {AppReducer} from "./AppReducer";
import {DB_QUOTES, HIDE_ALERT, HIDE_LOAD, REMOVE_QUOTE, SHOW_ALERT, SHOW_LOAD} from "./AppTypes";
import {handlerDataFromDB} from "../../assets/helpers";
import axios from "../../assets/instanse"

const AppContext = React.createContext()
export const useApp = () => useContext(AppContext)

const initialState = {
    alertIsShow: true,
    isLoad: false,
    quotes: [],
}
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const handleQuotes = (data) => {
        const quotes = handlerDataFromDB(data)
        dispatch({
            type: DB_QUOTES,
            payload: quotes
        })
    }
    const showAlert = (alertTitle, alertType = "warning") => {
        dispatch({
            type: SHOW_ALERT,
            payload: {alertTitle, alertType}
        })
    }
    const hideAlert = () => {
        if (state.alertIsShow) {
            dispatch({
                type: HIDE_ALERT,
            })
        }
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
    const createQuoteData = (author, category, description) => {
        return {
            category, author, description, date: new Date().toLocaleDateString()
        }
    }
    const removeQuote = (id) => {
        showLoad()
        const removeURI = `/quotes/${id}.json`
        axios.delete(removeURI).then(() => {
            dispatch({
                type: REMOVE_QUOTE,
                payload: id,
            })
            showAlert("Your delete quote!")

        }).catch(e => {
            showAlert("Sorry Error: " + e.message)
        }).finally(hideLoad)

    }
    return <AppContext.Provider value={{
        state, hideAlert, showAlert, showLoad, hideLoad, createQuoteData,
        handleQuotes, quotes: state.quotes, removeQuote
    }}>
        {children}
    </AppContext.Provider>
}
export default AppProvider
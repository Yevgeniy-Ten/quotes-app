import React, {useContext, useReducer} from "react";
import {AppReducer} from "./AppReducer";
import {
    DB_QUOTES,
    DESTROY_QUOTES,
    HIDE_ALERT,
    HIDE_LOAD,
    REMOVE_QUOTE,
    SHOW_ALERT,
    SHOW_LOAD,
    NEW_EDITABLE_PRODUCT,
} from "./AppTypes";
import {compareValues, handlerDataFromDB} from "../../assets/helpers";
import axios from "../../assets/instanse"

const AppContext = React.createContext()
export const useApp = () => useContext(AppContext)

const initialState = {
    alertIsShow: true,
    isLoad: false,
    quotes: [],
    editableQuote: {},
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
    const destroyQuotes = () => {
        dispatch({
            type: DESTROY_QUOTES,
        })
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
    const setEditableQuote = (quote) => {
        dispatch({
            type: NEW_EDITABLE_PRODUCT,
            payload: quote,
        })
    }
    const updateEditableProduct = (author, category, description) => {
        const isValidUpdate = !compareValues(description, state.editableQuote.description) || !compareValues(author, state.editableQuote.author) || !compareValues(category, state.editableQuote.category)
        const URI = `/quotes/${state.editableQuote.id}.json`
        showLoad()
        if (isValidUpdate) {
            const quote = {
                ...state.editableQuote,
                author, description, category
            }
            axios.put(URI, quote).then(() => {
                setEditableQuote(quote)
                showAlert("Quote data updated!", "success")
            }).catch(e => {
                showAlert("Some error " + e.message)
            }).finally(hideLoad)
        } else {
            showAlert("You not change quotes data!")
        }
    }
    return <AppContext.Provider value={{
        state, hideAlert, showAlert, showLoad, hideLoad, createQuoteData,
        handleQuotes, quotes: state.quotes, removeQuote,
        editableQuote: state.editableQuote, destroyQuotes, setEditableQuote, updateEditableProduct
    }}>
        {children}
    </AppContext.Provider>
}
export default AppProvider
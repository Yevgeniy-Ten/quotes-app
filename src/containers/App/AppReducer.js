import {
    DB_QUOTES,
    HIDE_ALERT,
    HIDE_LOAD,
    SHOW_ALERT,
    SHOW_LOAD,
    REMOVE_QUOTE,
    NEW_EDITABLE_PRODUCT,
    DESTROY_QUOTES
} from "./AppTypes";

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => ({...state, ...payload, alertIsShow: true}),
    [HIDE_ALERT]: (state) => ({...state, alertIsShow: false}),
    [SHOW_LOAD]: (state) => ({...state, isLoad: true}),
    [DB_QUOTES]: (state, {payload}) => ({...state, quotes: payload}),
    [HIDE_LOAD]: (state) => ({...state, isLoad: false}),
    [REMOVE_QUOTE]: (state, {payload}) => ({...state, quotes: state.quotes.filter(quote => quote.id !== payload)}),
    [DESTROY_QUOTES]: (state) => ({...state, quotes: []}),
    [NEW_EDITABLE_PRODUCT]: (state, {payload}) => ({...state, editableProduct: payload}),
    DEFAULT: state => state,
}

export const AppReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
import {HIDE_ALERT, HIDE_LOAD, SHOW_ALERT, SHOW_LOAD} from "./AppTypes";

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => ({...state, ...payload, alertIsShow: true}),
    [HIDE_ALERT]: (state) => ({...state, alertIsShow: false}),
    [SHOW_LOAD]: (state) => ({...state, isLoad: true}),
    [HIDE_LOAD]:(state)=>({...state,isLoad: false}),
    DEFAULT: state => state,
}

export const AppReducer = (state, action) => {
    debugger
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
import React from "react";
import Spinner from "react-bootstrap/Spinner";
import {useApp} from "../../containers/App/AppContext";

const AppLoader = () => {
    const {state}=useApp()
    if(!state.isLoad) return null;
    return <div className="loader-bg"><Spinner animation="border" variant="light"/></div>
}
export default AppLoader
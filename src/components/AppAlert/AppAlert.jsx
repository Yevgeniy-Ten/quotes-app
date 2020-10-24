import React from "react";
import Alert from "react-bootstrap/Alert";
import {useApp} from "../../containers/App/AppContext";

const AppAlert = () => {
    const {hideAlert, state} = useApp()
    if (!state.alertIsShow || !state.alertTitle) return null
    return <Alert variant={state.alertType} onClose={hideAlert} dismissible>
        <Alert.Heading>{state.alertTitle}</Alert.Heading>
    </Alert>
}
export default AppAlert
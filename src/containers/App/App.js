import React from "react";
import AppProvider from "./AppContext";
import AppAlert from "../../components/AppAlert/AppAlert";
import AppLoader from "../../components/AppLoader/AppLoader";
import AppNav from "../../components/AppNav/AppNav";

function App() {
    return (
        <AppProvider>
            <AppNav/>
            <div className="bg-dark text-light">
                <AppAlert/>
                <AppLoader/>
            </div>
        </AppProvider>
    );
}

export default App;

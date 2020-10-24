import React from "react";
import AppProvider from "./AppContext";
import AppAlert from "../../components/AppAlert/AppAlert";
import AppLoader from "../../components/AppLoader/AppLoader";
import AppNav from "../../components/AppNav/AppNav";
import {Container} from "react-bootstrap";
import {Switch, Route, Redirect} from "react-router-dom"
import AddQuote from "../../pages/AddQuote/AddQoute";

function App() {
    return (
        <div className="App text-light">
            <AppProvider>
                <AppNav/>
                <Container className="py-3">
                    <AppAlert/>
                    <AppLoader/>
                    <Switch>
                        <Route path="/add-quote" component={AddQuote}/>
                    </Switch>
                </Container>
            </AppProvider>
        </div>
    );
}

export default App;

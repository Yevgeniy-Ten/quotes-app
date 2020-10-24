import React from "react";
import AppProvider from "./AppContext";
import AppAlert from "../../components/AppAlert/AppAlert";
import AppLoader from "../../components/AppLoader/AppLoader";
import AppNav from "../../components/AppNav/AppNav";
import {Container} from "react-bootstrap";
import {Switch, Route, Redirect} from "react-router-dom"
import AddQuote from "../../pages/AddQuote/AddQoute";
import Quotes from "../../pages/Quotes/Quotes";

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
                        <Route path="/quotes" exact component={Quotes}/>
                        <Redirect from={"/" || ""} to="/quotes"/>
                    </Switch>
                </Container>
            </AppProvider>
        </div>
    );
}

export default App;

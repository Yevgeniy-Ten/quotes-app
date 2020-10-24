import React from "react";
import AppProvider from "./AppContext";
import AppAlert from "../../components/AppAlert/AppAlert";
import AppLoader from "../../components/AppLoader/AppLoader";
import AppNav from "../../components/AppNav/AppNav";
import {Container} from "react-bootstrap";
import {Switch, Route, Redirect} from "react-router-dom"
import AddQuote from "../../pages/AddQuote/AddQoute";
import Quotes from "../../pages/Quotes/Quotes";
import QuoteEdit from "../../pages/QuoteEdit/QuoteEdit";
import QuotesByCategory from "../../pages/QuotesByCategory/QuotesByCategory";
import About from "../../pages/About/About";

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
                        <Route path="/quotes/:category" exact component={QuotesByCategory}/>
                        <Route path="/quotes/:id/edit" component={QuoteEdit}/>
                        <Route path="/about" component={About}/>
                        <Redirect from={"/" || ""} to="/quotes"/>
                    </Switch>
                </Container>
            </AppProvider>
        </div>
    );
}

export default App;

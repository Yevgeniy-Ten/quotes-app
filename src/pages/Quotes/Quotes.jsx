import React, {useEffect} from "react";
import axios from "../../assets/instanse"
import {useApp} from "../../containers/App/AppContext";
import ListGroup from "react-bootstrap/ListGroup";
import Quote from "../../components/Quote/Quote"

const Quotes = () => {
    const {showLoad, hideLoad, handleQuotes, quotes, removeQuote} = useApp()
    useEffect(() => {
        showLoad()
        axios.get("/quotes.json").then(e => {
            if (e.data) {
                handleQuotes(e.data)
            }
        }).finally(hideLoad)
// eslint-disable-next-line
    }, [])
    return <><h1>All Quotes</h1>
        <ListGroup>
            {
                quotes.length ? quotes.map(quote => <Quote key={quote.id} author={quote.author}
                                                           date={quote.date}
                                                           id={quote.id}
                                                           onRemove={removeQuote.bind(null, quote.id)}
                                                           descr={quote.description}
                                                           category={quote.category}/>) :
                    <ListGroup.Item variant="info">Quotes List Empty</ListGroup.Item>
            }
        </ListGroup>
    </>
}
export default Quotes
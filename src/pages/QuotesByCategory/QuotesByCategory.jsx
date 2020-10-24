import React, {useEffect} from "react";
import axios from "../../assets/instanse"
import {useApp} from "../../containers/App/AppContext";
import Quote from "../../components/Quote/Quote";
import ListGroup from "react-bootstrap/ListGroup";

const QuotesByCategory = (props) => {
    const {showLoad, hideLoad, handleQuotes, quotes, removeQuote, destroyQuotes, showAlert} = useApp()
    useEffect(() => {
        const {category} = props.match.params;
        const URI = `/quotes.json?orderBy="category"&equalTo="${category}"`
        showLoad()
        axios.get(URI).then(e => {
            if (Object.keys(e.data).length) {
                handleQuotes(e.data)
            } else {
                destroyQuotes()
                showAlert(`Quotes by ${category} not found!`)
                props.history.replace("/")
            }
        }).finally(hideLoad).catch(e => {
            showAlert("Some error", e.message)
        })
        // eslint-disable-next-line
    }, [props.match.params])
    return <>
        <h1>Category Page</h1>
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
export default QuotesByCategory
import React, {useEffect} from "react";
import axios from "../../assets/instanse"
import {useApp} from "../../containers/App/AppContext";
import {useInputValue} from "../../assets/customHooks";
import {validString} from "../../assets/helpers";
import QuoteForm from "../../components/AppForm/AppForm";

const QuoteEdit = (props) => {
    const {showLoad, hideLoad, showAlert, hideAlert, editableQuote, setEditableQuote, updateEditableProduct} = useApp()
    const authorInput = useInputValue(editableQuote.author)
    const quoteInput = useInputValue(editableQuote.description)
    const categoryInput = useInputValue(editableQuote.category)
    useEffect(() => {
        hideAlert()
        showLoad()
        const {id} = props.match.params
        const URI = `/quotes/${id}.json`
        axios.get(URI).then(e => {
            if (e.data === null) {
                showAlert("Product undefined: Correct your URL!")
                props.history.replace("/")
            } else {
                const quote = {...e.data, id}
                setEditableQuote(quote)
                authorInput.setValue(quote.author)
                quoteInput.setValue(quote.description)
                categoryInput.setValue(quote.category)
            }
        }).finally(hideLoad)
        return () => {
            hideAlert()
        }
        // eslint-disable-next-line
    }, [props.match.params.id])

    const submitHandler = (e) => {
        e.preventDefault()
        const isValidInputs = validString(authorInput.value) && validString(quoteInput.value)
        if (isValidInputs) {
            updateEditableProduct(authorInput.value, categoryInput.value, quoteInput.value)
        } else {
            showAlert("Fill the inputs, This Editing Page!")
        }
    }
    return <>
        <h1>Quote Editor</h1>
        <QuoteForm submitHandler={submitHandler} authorInput={authorInput} quoteInput={quoteInput}
                   categoryInput={categoryInput}/>
    </>
}
export default QuoteEdit
import React, {useEffect} from "react";
import axios from "../../assets/instanse"
import {useApp} from "../../containers/App/AppContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useInputValue} from "../../assets/customHooks";
import {validString} from "../../assets/helpers";

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
    }, [props.match.params])

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
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Quote Author</Form.Label>
                <Form.Control {...authorInput.bind} type="text" placeholder="Author"/>
                <Form.Text className="text-muted">
                    Indicate yourself, or the author of the quote
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Category Select</Form.Label>
                <Form.Control as="select" {...categoryInput.bind} custom>
                    <option value="avengers">Avengers</option>
                    <option value="motivation">Motivation</option>
                    <option value="humor">Humor</option>
                    <option value="saying">Saying</option>
                    <option value="famouse-people">Famouse people</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="quote">
                <Form.Label>Quote text</Form.Label>
                <Form.Control {...quoteInput.bind} as="textarea" rows={3}/>
            </Form.Group>
            <Button variant="light" type="submit">
                Save
            </Button>
        </Form>
    </>
}
export default QuoteEdit
import React, {useEffect} from "react";
import {useApp} from "../../containers/App/AppContext";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import {useInputValue} from "../../assets/customHooks";
import {validString} from "../../assets/helpers";
import axios from "../../assets/instanse"

const AddQuote = () => {
    const {showAlert, hideAlert, createQuoteData, showLoad, hideLoad} = useApp()
    const authorInput = useInputValue("")
    const quoteInput = useInputValue("")
    const categoryInput = useInputValue("avengers")
    useEffect(() => {
        return () => {
            hideAlert()
        }
        // eslint-disable-next-line
    }, [])
    const submitHandler = (e) => {
        hideAlert()
        e.preventDefault()
        const isValidInputs = validString(authorInput.value) && validString(quoteInput.value)
        if (isValidInputs) {
            showLoad()
            const data = createQuoteData(categoryInput.value, authorInput.value, quoteInput.value)
            axios.post("/quotes.json", data).then(() => {
                showAlert("You create new quote!, Congratulations", "success")
                authorInput.clear()
                quoteInput.clear()
            }).catch((e) => {
                showAlert(`Some error! ${e.message}`, "danger")
            }).finally(hideLoad)
        } else {
            showAlert("Error! Fill in the fields!")
        }
    }
    return (
        <>
            <h1>Add Quote</h1>
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
                    Submit
                </Button>
            </Form>
        </>
    )
}
export default AddQuote
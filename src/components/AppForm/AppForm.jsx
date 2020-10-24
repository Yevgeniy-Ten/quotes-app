import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const QuoteForm = ({submitHandler, authorInput, categoryInput, quoteInput}) => (
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
)
export default QuoteForm
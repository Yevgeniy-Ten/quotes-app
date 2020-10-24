import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Quote = ({descr, date, author, id, category, onRemove}) => {
    const URL = `/quotes/${id}/edit`
    return <ListGroupItem variant="info">
        <div className="d-flex justify-content-between align-items-center">
            <div className="mr-3">
                <div className="d-flex"><h5 className="mr-3 text-capitalize">Author: {author}</h5>
                    <small className="text-muted">{date}</small>
                </div>
                <p>Category: {category}</p>
            </div>
            <div className="QuoteBtns">
                <Link to={URL} className="edit-btn btn btn-outline-secondary mr-2 p-3"/>
                <Button onClick={onRemove} variant="outline-danger">&times;</Button>
            </div>
        </div>
        <blockquote className="Quote-description">{descr}</blockquote>
    </ListGroupItem>
}
export default Quote
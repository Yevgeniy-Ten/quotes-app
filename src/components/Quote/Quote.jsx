import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

const Quote = ({descr, date, author, id, category, onRemove}) => {
    return <ListGroupItem variant="info">
        <div className="d-flex justify-content-between align-items-center">
            <div className="mr-3">
                <div className="d-flex"><h5 className="mr-3 text-capitalize">Author: {author}</h5>
                    <small className="text-muted">{date}</small>
                </div>
                <p>Category: {category}</p>
            </div>
            <div className="QuoteBtns">
                <button className="edit-btn btn btn-outline-secondary mr-2 p-3"/>
                <Button onClick={onRemove} variant="outline-danger">&times;</Button>
            </div>
        </div>
        <blockquote className="Quote-description">{descr}</blockquote>
    </ListGroupItem>
}
export default Quote
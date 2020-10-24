import React, {useEffect} from "react";
import {useApp} from "../../containers/App/AppContext";
import QuoteForm from "../../components/AppForm/AppForm";
import {useInputValue} from "../../assets/customHooks";
import {validString} from "../../assets/helpers";
import axios from "../../assets/instanse"

const AddQuote = () => {
    const {showAlert, hideAlert, createQuoteData, showLoad, hideLoad} = useApp()
    const authorInput = useInputValue("")
    const quoteInput = useInputValue("")
    const categoryInput = useInputValue("avengers")
    useEffect(() => {
        hideAlert()
        return () => {
            hideAlert()
        }
        // eslint-disable-next-line
    }, [])
    const submitHandler = (e) => {
        e.preventDefault()
        const isValidInputs = validString(authorInput.value) && validString(quoteInput.value)
        if (isValidInputs) {
            showLoad()
            const data = createQuoteData(authorInput.value, categoryInput.value, quoteInput.value)
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
            <QuoteForm submitHandler={submitHandler}
                       categoryInput={categoryInput}
                       authorInput={authorInput}
                       quoteInput={quoteInput}/>
        </>
    )
}
export default AddQuote
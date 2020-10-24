import {useState} from "react";

export const useInputValue = (initialValue = "") => {
    const [value, setValue] = useState(initialValue)
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value),
        },
        clear: () => setValue(""),
        value,
    }
}
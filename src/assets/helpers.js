export const validString = (string) => {
    return string ? string.trim().length > 0 : false
}
export const compareValues = (val1, val2) => val1 === val2;
export const handlerDataFromDB = (data) => {
    return Object.keys(data).map((id, i) => {
        return {
            ...data[id],
            id,
        }
    }).reverse()
}

export const validNumber = (number) => {
    number = parseInt(number)
    return typeof number === "number" && !isNaN(number)
}
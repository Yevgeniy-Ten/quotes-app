export const validString = (string) => {
    return string ? string.trim().length > 0 : false
}
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
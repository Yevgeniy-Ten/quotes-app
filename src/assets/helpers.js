import noImg from "../uploads/no-img.png"

export const validString = (string) => {
    return string ? string.trim().length > 0 : false
}
export const handlerDataFromDB = (data) => {
    return Object.keys(data).map(id => {
        return {
            ...data[id],
            id
        }
    }).reverse()
}

export const validNumber = (number) => {
    number = parseInt(number)
    return typeof number === "number" && !isNaN(number)
}
export const imgReplacer = (e) => {
    e.target.src = noImg;
}
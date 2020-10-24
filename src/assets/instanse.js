import axios from "axios"

const BASE_URL = "https://for-test-48a0e.firebaseio.com/"
const instanse = axios.create({
    baseURL: BASE_URL
})

export default instanse
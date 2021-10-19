import axios from "axios";

const api = axios.create({
    baseURL: "https://dindinapi.azurewebsites.net/api/"
})

export default
    api
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api-cartao-node.onrender.com"
})

export default instance
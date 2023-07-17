import axios from "axios";
import { AxiosInstance } from "axios";

const httpClient = () => {
    const instance: AxiosInstance = axios.create({
        baseURL: "http://localhost:1337"
    })

    return instance;
}

export default httpClient;
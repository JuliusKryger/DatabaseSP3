import axios from "axios";

const URL = 'http://127.0.0.1:8000';

const api = () => {

    const getUrl = () => {
        return URL;
    }

    const http = () => {
        return axios.create()
    }

    return {
        getUrl,
        http,
    }
}

export default api();
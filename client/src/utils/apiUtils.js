import axios from "axios";

const URL = '<API url goes here>';

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
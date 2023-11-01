import axios from "axios";

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key:'AIzaSyB3qBE3f5Iis9OEz4rb1W5U_K-HR2jKBoY',
    }
})

export default request;
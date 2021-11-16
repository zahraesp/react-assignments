import axios from "axios";

const AccessKey = `sNfeJJ8pXIdXDI2ffxjoOOC1ZRg3ZBAAhLrTdMklnhw`;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${AccessKey}`
    }
})

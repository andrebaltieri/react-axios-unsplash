import axios from 'axios';

const key = 'b40feb0dd78977e649d595a587c2d347133e79f6f3681fd746104cc25462ef41';
const url = 'https://api.unsplash.com';

export default axios.create({
    baseURL: url,
    headers: {
        Authorization: `Client-ID ${key}`
    }
});
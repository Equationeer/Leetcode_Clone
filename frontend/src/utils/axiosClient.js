import axios from "axios"

const axiosClient =  axios.create({
    baseURL: 'https://leetcode-clone-8sgq.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});
export default axiosClient;


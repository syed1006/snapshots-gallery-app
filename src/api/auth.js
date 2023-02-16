import axios from 'axios';

const getToken = async()=>{
    try {
        const res = await axios.post(
            `https://api.unsplash.com/auth/token/`
        )
        console.log(res);
        return res
    } catch (error) {
        console.log(error)
    }
}

export default getToken;
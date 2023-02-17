import axios from 'axios';

const fetchData = async (tag, page)=>{
    try {
        //commenting this code because flickr api is not giving the accurate data
        // const {data} = await axios.get(
        // `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.REACT_APP_API_KEY}&tag=${tag}&per_page=10&page=${page}&format=json&nojsoncallback=1`
        // );
    
        // return data;
    } catch (error) {
        console.log(error);
        return error
    }
}

export default fetchData;
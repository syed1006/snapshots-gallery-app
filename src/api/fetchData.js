import axios from 'axios';

const fetchData = async (query, page)=>{
    try {
        //commenting this code because flickr api is not giving the accurate data
        // const {data} = await axios.get(
        // `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.REACT_APP_API_KEY}&tag=${tag}&per_page=10&page=${page}&format=json&nojsoncallback=1`
        // );

        //setting up unsplash api
        const {data} = await axios.get(
            `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}&per_page=20`
        )
    
        return data;
    } catch (error) {
        console.log(error);
        return error
    }
}

export default fetchData;
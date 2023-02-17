import React, { useEffect, useState } from 'react';
import ImageItem from '../Image-item/ImageItem';
import './ImageContainer.css';
import fethData from '../../api/fetchData';
import InfiniteScroll from 'react-infinite-scroll-component';


function ImagesContainer({ category, search }) {
  const [state, setState] = useState({ col1: [], col2: [], col3: [], col4: [], page: 1, totalPages: 0, error: false });
  const [formData, setformData] = useState()

  const fetchImage = async (search=false) => {
    try {
      //commenting this code because flickr api is not giving the accurate data
      // const { photos } = await fethData(category, state.page);
      // // console.log(photos);
      // let imagesUrl = photos?.photo?.map((imgdata)=>{
      //   return `https://farm${imgdata.farm}.staticflickr.com/${imgdata.server}/${imgdata.id}_${imgdata.secret}.jpg`
      // })
      let query = category
      if(search){
        query = formData;
      }
      const data = await fethData(query, state.page);
      console.log(data);
      let imagesUrl = [];
      let col = [];
      for(let i = 0; i < 20; i++){
        let imageData = data?.results[i]
        col.push(imageData?.urls?.regular)
        if((i + 1) % 5 === 0){
          imagesUrl.push(col);
          col = [];
        }
      }
      console.log(imagesUrl)
      console.log(state)
      setState({ ...state, col1: [...state.col1, ...imagesUrl[0]], col2: [...state.col2, ...imagesUrl[1]], col3: [...state.col3, ...imagesUrl[2]], col4: [...state.col4, ...imagesUrl[3]],page: state.page + 1, totalPages: data.total_pages });

    } catch (error) {
      console.log(error);
      setState({ ...state, error: true })
    }

  }

  const handleClick = async (e)=>{
    e.preventDefault()
    setState({ col1: [], col2: [], col3: [], col4: [], page: 1, totalPages: 0, error: false });
    await fetchImage(search)
  }
  useEffect(() => {
    if(!search) fetchImage();
     // eslint-disable-next-line
  }, [])
  return (
    <>
    {
      search && <form onSubmit={handleClick} className="search-container">
        <input 
        type="text" 
        name="search" 
        id="search" 
        required
        autoComplete='off'
        placeholder='Search keywords'
        onChange={(e)=>{setformData(e.target.value)}}
        onBlur={()=>{setState({ col1: [], col2: [], col3: [], col4: [], page: 1, totalPages: 0, error: false })}}
        />
        <button >Search</button>
      </form>
    }
    {state.page> 1 && <InfiniteScroll
      dataLength={state.page - 1 * 20} //This is important field to render the next data
      next={()=>{fetchImage(search)}}
      hasMore={state.page < state.totalPages}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      
    >
      <div className="container">
        <div className="row">
          {state.col1.map((image, index) => {
            return <ImageItem imageUrl={image} key={index} />
          })}
          </div>
          <div className="row">
          {state.col2.map((image, index) => {
            return <ImageItem imageUrl={image} key={index} />
          })}
          </div>
          <div className="row">
          {state.col3.map((image, index) => {
            return <ImageItem imageUrl={image} key={index} />
          })}
          </div>
          <div className="row">
          {state.col4.map((image, index) => {
            return <ImageItem imageUrl={image} key={index} />
          })}
          </div>
      </div>
    </InfiniteScroll>}
    </>
  )
}

export default ImagesContainer


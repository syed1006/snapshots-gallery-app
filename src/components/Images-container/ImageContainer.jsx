import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext/AppContext';
import ImageItem from '../Image-item/ImageItem';
import './ImageContainer.css';
import fethData from '../../api/fetchData';


function ImagesContainer({ category }) {
  const context = useContext(AppContext);
  const { state: { theme, search } } = context;
  const [state, setState] = useState({ images: [], page: 1, totalResults: 0, error: false });

  const fetchImage = async () => {
    try {
      //commenting this code because flickr api is not giving the accurate data
      // const { photos } = await fethData(category, state.page);
      // // console.log(photos);
      // let imagesUrl = photos?.photo?.map((imgdata)=>{
      //   return `https://farm${imgdata.farm}.staticflickr.com/${imgdata.server}/${imgdata.id}_${imgdata.secret}.jpg`
      // })
      setState({...state, images: [...state.images], page: state.page + 1});

    } catch (error) {
      console.log(error);
      setState({...state, error: true})
    }

  }

  useEffect(() => {
    fetchImage()
  }, [])
  return (

    <div className="container">
      {state.images.map((image, index) => {
        return <ImageItem imageUrl={image} key={index} />
      })}
    </div>
  )
}

export default ImagesContainer


import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext/AppContext';
import ImageItem from '../Image-item/ImageItem';
import './ImageContainer.css';
import Unsplash, { toJson } from 'unsplash-js';
import getToken from '../../api/auth';


function ImagesContainer({ category }) {
  const context = useContext(AppContext);
  const { state: { theme, search } } = context;
  const [state, setState] = useState({ page: 1, totalResults: 0 });
  let art = [];
  let data;
  const [images, setImages] = useState([])

  const unsplash = new Unsplash({
    applicationId: process.env.REACT_APP_API_KEY,
    secret: process.env.REACT_APP_API_SECRET
  });

  const fetchImage = async () => {
    // const res =  axios.get( url  
    // )
    let res;
    unsplash.search.photos("cats", 1)
      .then(toJson)
      .then(json => {
        // Do something with the json object
        res= json
        console.log(res);
      });
  }

  useEffect(() => {
    fetchImage()
  })
  return (

    <div className="container">
      {images.map((image, index) => {
        return <ImageItem image={image} key={index} />
      })}
    </div>
  )
}

export default ImagesContainer


import React from 'react';
import './ImageItem.css'

function ImageItem({imageUrl}){
  return (
      <img src={imageUrl} alt="" />
  )
}

export default ImageItem;

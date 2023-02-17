import React, { useContext } from 'react';
import AppContext from '../../context/AppContext/AppContext';
import './ImageItem.css'

function ImageItem({imageUrl}){
  const context = useContext(AppContext);
  const {state: {theme}} = context;
  return (
    <div className={`item ${theme?'dark-theme':''}`}>
      <img src={imageUrl} alt="" />
    </div>
  )
}

export default ImageItem;

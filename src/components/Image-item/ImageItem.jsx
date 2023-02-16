import React, { useContext } from 'react';
import AppContext from '../../context/AppContext/AppContext';
import './ImageItem.css'

function ImageItem(){
  const context = useContext(AppContext);
  const {state: {theme}} = context;
  return (
    <div className={`item ${theme?'dark-theme':''}`}>
    </div>
  )
}

export default ImageItem;

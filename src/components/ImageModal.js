import React from "react";
import  './ImageModal.css';
const ImageModal = ({url, onClick}) => {
  return (
    <div className="backdrop" >
      <div className="modal">
      <img src={url} alt="" onClick = {onClick} onMouseOut = {onClick} />
    </div>
    </div>
  );
};

export default ImageModal;
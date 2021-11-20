import "./ImagePieceOfBlock.css";
import { images } from "./Utility/images.js";
import React from "react";

function ImagePieceOfBlock({ element }) {
  const image = images.find((e) => e === element);
  return (
    <p className="styleSection">
      <h5>{image.titre}</h5>
      <h5>{image.desc}</h5>
      <h5>{image.theme}</h5>
      <img src={image.src} alt="not-found" className="img" />
    </p>
  );
}
export default ImagePieceOfBlock;

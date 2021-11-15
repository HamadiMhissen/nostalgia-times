import { images } from "./Utility/images.js";
import React from "react";

function ImagePieceOfBlock({ element }) {
  const image = images.find((e) => e === element);
  return (
    <div>
      <h4>{image.titre}</h4>
      <h4>{image.desc}</h4>
      <h4>{image.theme}</h4>
      <img src={image.src} alt="not-found" width="300px" height="300px" />
    </div>
  );
}
export default ImagePieceOfBlock;

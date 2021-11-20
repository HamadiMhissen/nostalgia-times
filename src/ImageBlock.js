import React from "react";
import { images } from "./Utility/images.js";
import ImagePieceOfBlock from "./ImagePieceOfBlock";

function ImageBlock() {
  const imagesToRender = images.map((e, index) => (
    <div key={index}>
      <ImagePieceOfBlock element={e} />
    </div>
  ));
  return <div>{imagesToRender}</div>;
}
export default ImageBlock;

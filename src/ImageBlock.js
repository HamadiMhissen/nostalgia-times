import ImagePieceOfBlock from "./imagePieceOfBlock";

function ImageBlock(props) {
  const value = parseInt(props.value);
  const name = props.name;
  return [...Array(value)].map((e, index) => (
    <p key={index}>
      <ImagePieceOfBlock value={parseInt(index + 1)} name={name} />
    </p>
  ));
}
export default ImageBlock;

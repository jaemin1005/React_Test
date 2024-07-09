interface TextNode {
  textNode: string;
}

const Minam:React.FC<TextNode> = ({textNode}) => {
  return (
    <h1>{textNode}</h1>
  );
}

export default Minam
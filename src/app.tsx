import React from 'react'
import "../public/css/test.css"
import { minam } from "../static/basic-data"

interface TextNode {
  textNode: string;
}

const Minam:React.FC<TextNode> = ({textNode}) => {
  return (
    <h1>{textNode}</h1>
  );
}

const App:React.FC = () => {
  return (
    <div>
      <Minam textNode={minam}/>
      <h1>Hello world</h1>
    </div>
  )
}

export default App
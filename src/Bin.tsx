import React from "react"

interface BinProps {
  h1TextNode : string
}


const Bin:React.FC<BinProps> = ({h1TextNode}) => {


  let style : React.CSSProperties = {
    color : "blue",
    background: "yellow",
    fontSize: "40px"
  }
  

  return (
    <div>
      <h1 style={style}>{h1TextNode}</h1>
    </div>
  );
}

export default Bin;

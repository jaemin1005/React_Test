import React from 'react'
import "../public/css/test.css"
import { minam } from "../static/basic-data"
import Minam from 'minam'

const App:React.FC = () => {
  return (
    <div>
      <Minam textNode={minam}/>
      <h1>Hello world</h1>
    </div>
  )
}

export default App
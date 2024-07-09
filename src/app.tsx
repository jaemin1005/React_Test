import React from 'react'
import "../public/css/test.css"
import { minam, listName } from "../static/basic-data"
import Minam from './minam'
import ULLi from './UlLi'

const App:React.FC = () => {
  return (
    <div>
      <Minam textNode={minam}/>
      <h1>Hello world</h1>
      <ULLi item={listName}/>
    </div>
  )
}

export default App
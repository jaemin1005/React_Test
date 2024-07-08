import React from 'react'
import ReactDom from 'react-dom/client'
import "../public/css/test.css"

const App:React.FC = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById("root")!);
root.render(<App />);
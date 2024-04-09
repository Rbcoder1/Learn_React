import { useState } from 'react'
import './App.css'
import ColorPalet from './components/ColorPalet';

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <ColorPalet colorSetter={setColor}/>
      </div>
      
    </>
  )
}

export default App

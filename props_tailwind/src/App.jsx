import './App.css'
import Card from './components/card'

function App() {
  const age ={
    "rohit":23
  }
  const newArray = [12,2,3,4]
  return (
    <>
      <h1 className="bg-green-400 rounded-xl p-4 mb-4">Hello</h1>
      <Card name="Rohit" age={age} newArray={newArray}/>
      <Card name="Jayesh"/>
      <Card name="Gaurav"/>
    </>
  )
}

export default App

const ColorPalet = ({ colorSetter }) => {
  return (
    <div className='fixed bottom-12 inset-x-0 flex flex-wrap justify-center px-2'>
      <div className="flex flex-wrap justify-center rounded-3xl gap-3 bg-black-400 px-2">
        <button className="outline-none px-4 bg-red-400 rounded-3xl py-1 text-white shadow-large" onClick={() => colorSetter("red")}>Red</button>
        <button className="outline-none px-4 bg-green-400 rounded-3xl py-1 text-white shadow-large" onClick={() => colorSetter("green")}>Green</button>
        <button className="outline-none px-4 bg-blue-400 rounded-3xl py-1 text-white shadow-large" onClick={() => colorSetter("blue")}>Blue</button>
        <button className="outline-none px-4 bg-yellow-400 rounded-3xl py-1 text-white shadow-large" onClick={() => colorSetter("yellow")}>Yellow</button>
        <button className="outline-none px-4 bg-purple-400 rounded-3xl py-1 text-white shadow-large" onClick={() => colorSetter("purple")}>Purple</button>
      </div>
    </div>
  )
}

export default ColorPalet

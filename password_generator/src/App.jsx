import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // userRef hook
  const passwordRef = useRef(null)
  const copyButtonRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "123467890"
    if (characterAllowed) str += "@#$%^&*(){}[]~!"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordIntoClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
    copyButtonRef.current.innerText = "copied"
  },[password])

  useEffect(() => {
    passwordGenerator()
    copyButtonRef.current.innerText = "copy"
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-medium rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-800 mb-4">
        <h5 className="text-center text-white">Password Generator</h5>
        <div className="flex items-center gap-x-2">
          <input type="text"
            placeholder='passoword'
            value={password}
            ref={passwordRef}
            className="outline-none w-full py-1 px-3 py-2 my-3"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-2 5 shrink-0"
            onClick={copyPasswordIntoClipboard}
            ref={copyButtonRef}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              className='cursor-pointer'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id='characterInput'
              className='cursor-pointer'
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

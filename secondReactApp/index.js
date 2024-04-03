import React from 'react'
import ReacDOM from 'react-dom'

const NavBar = (
  `<nav>
    <h3>Logo</h3>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
    </ul>
  </nav>`
)

ReactDOM.render(NavBar, document.getElementById("root"));


// not working show erro : Uncaught SyntaxError: expected expression, got '<'
// ReactDOM.render(<h1>Hello React </h1>,document.getElementById("root"));
// ReactDOM.render(<p>Hi My Name Is Rohit</p>,document.getElementById("root"))

// Render The Unorder List Using ReactDOM.render 
// ReactDOM.render(
//                 <ul><li>rohit</li><li>Jayesh</li></ul>, 
//                 document.getElementById("root")
//             )


// Making Components 
// maincontent component 

// function MainContent() {
//     return (
//         <div>
//             <h1>This Is My Main Content</h1>
//             <p>Hello I Am From React</p>
//         </div>
//     )
// }

// ReactDOM.render(<MainContent/>,document.getElementById("root"))

// create a same above task using vanilla javascript 

// var root = document.getElementById("root");

// var h1 = document.createElement("h1")
// h1.innerText = "This is My Main Content"
// var p = document.createElement("p")
// p.innerHTML = "Hello I Am From Vanilla Javascript"

// root.appendChild(h1)
// root.appendChild(p)


// JSX 

// const page = (
//     <div>
//         <h1>Hello React</h1>
//     </div>
// )

// // console.log(element)
// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )


const NavBar = (
    <nav>
        <h3>Logo</h3>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
        </ul>
    </nav>
)

ReactDOM.render(NavBar, document.getElementById("root"))
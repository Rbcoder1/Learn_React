
// import Header from './Header'

// const Header = require('./Header')
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-img.png" width="40px" alt="react" />
//             </nav>
//         </header>
//     )
// }

// function Footer() {
//     return (
//         <footer>
//             <small>@2022 Rohit development. All rights reserved</small>
//         </footer>
//     )
// }

// function MainContent() {
//     return (
//         <div>
//             <ol>
//                 <li>It Is very Popular Library</li>
//                 <li>It Help to Make Single page application</li>
//                 <li>It Developed By FaceBook</li>
//             </ol>
//         </div>
//     )
// }
// function CustPage() {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }

// ReactDOM.render(<CustPage />, document.getElementById("root"))


// component is function that returns React Element or JSX
// React Component Always Start From Capital Letter it is in PascalCase 


// challenge 



// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-img.png" width="40px" alt="react" />
//                 <ul className="nav_item">
//                     <li>Home</li>
//                     <li>Pricing</li>
//                     <li>About</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

var React = require('react')
var ReactDOM = require('react-dom')

function MainContent() {
    return (
        <div>
            <ul>
                <li>It Is very Popular Library</li>
                <li>It Help to Make Single page application</li>
                <li>It Developed By FaceBook</li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>@2022 Rohit development. All rights reserved</small>
        </footer>
    )
}

function CustPage() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<CustPage />, document.getElementById("root"))
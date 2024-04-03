import React from "react"

export default function Header(){
    return(
        <header>
            <nav>
                <img src="./react-img.png" width="40px" alt="react" />
                <ul className="nav_item">
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
    )
}
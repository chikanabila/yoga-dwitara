import React from "react"
import {Link} from "react-router-dom"
import "../App.css"

export const Navbar = () => {
  return (
    <div className="topnav">
        <Link to ="/" className="App-link"><h3>Home</h3></Link>
        <Link to ="dashboard" className="App-link"><h3>Login</h3></Link>
        <Link to="DataFetch" className="App-link"><h3>DataFetch</h3></Link>
        <Link to ="Contact" className="App-link"><h3>Contact</h3></Link>
      </div>
  )
}

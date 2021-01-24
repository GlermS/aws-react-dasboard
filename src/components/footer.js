import React from 'react'
import logo from "../assets/logo.svg"
import {Link} from "react-router-dom"

class Footer extends React.Component{
    render() {
        return(
            <footer className="footer">
                <p>
                    Powered by: 
                </p>
                <Link to="/">
                <img src={logo} alt="Yubbe Logo" className="logo" />
                </Link>
            </footer>
         )
    }
}

export default Footer
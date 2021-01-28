import React from 'react'
import logo from "../assets/yubbe_logo_long.png"
import {Link} from "react-router-dom"

class Footer extends React.Component{
    render() {
        return(
            <footer className="footer">
                <Link to="/">
                <img src={logo} alt="Yubbe Logo" className="logo" />
                </Link>
            </footer>
         )
    }
}

export default Footer
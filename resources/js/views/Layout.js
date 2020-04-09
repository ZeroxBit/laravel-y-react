import React from 'react'
import "../css/main.css";

const Layout = (props) => {
    return (
        <div className="container full-height">
            <div className="row justify-content-md-center align-items-center full-height">
                {props.children}
            </div>
        </div>
    )
}

export default Layout

import React from 'react'
import Navbar from './Navbar';


const Layout = (props) => {
    const { children, loginState } = props;
    return (
        <div>
            <Navbar loginState={loginState} />
            {children}
        </div>
    )
}

export default Layout

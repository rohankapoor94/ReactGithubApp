import React from 'react'

const Navbar =({title,icon})=> {
        return (
            <nav className="navbar bg-dark mb-4">
                <h3 style={{color:'white'}}>
                    <i  className={icon} />
                      &nbsp;{title}
                    </h3>
            </nav>
        )
}

export default Navbar

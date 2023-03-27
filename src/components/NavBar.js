import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                <img src='https://vortex-it.com/wp-content/uploads/2022/04/LOGO-VORTEX-PNG@4x-230x35.png' alt="Bootstrap"/>
                </Link>
                <form className="d-flex" role="search">
                <Link to= '/' className="btn btn-outline-light mx-2" type="submit">Inicio</Link>
                <Link to= '/asset' className="btn btn-outline-light" type="submit">Assets</Link>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
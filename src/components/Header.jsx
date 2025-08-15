import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              { 
                user && <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">dashboard</Link>
                  </li>
                  <button onClick={handleLogout}>cerrar sesion</button>
                </>
              }
              
              {
                !user && <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/registrate">registrate</Link>
                  </li>
                </>
              }
              
            </ul>
          </div>
        </div>
      </nav>

      <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Dino_non-birthday_version.gif" alt="imagen de logo" />
    </header>
  )
}

export { Header }
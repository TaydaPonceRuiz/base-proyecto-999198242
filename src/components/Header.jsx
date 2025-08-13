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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              { 
                user && <>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">inicio</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/dashboard">dashboard</Link>
                  </li>
                  <button onClick={handleLogout}>cerrar sesion</button>
                </>
              }
              
              {
                !user && <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">login</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/registrate">registrate</Link>
                  </li>
                </>
              }
              
            </ul>
          </div>
        </div>
      </nav>

      <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="imagen de logo" />
    </header>
  )
}

export { Header }
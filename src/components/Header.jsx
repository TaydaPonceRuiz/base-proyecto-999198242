import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header style={{ backgroundColor:"lightblue"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="imagen de logo" />
      <nav>
        <ul>
          {/*cambiar elementos a por componentes Link de react-router-dom*/}
          {
            user && <>
              <li><Link to="/">inicio</Link></li>
              <li><Link to="/dashboard">dashboard</Link></li>
              <button onClick={handleLogout}>cerrar sesion</button>
            </>
          }
          {
            !user && <>
              <li><Link to="/login">login</Link></li>
              <li><Link to="/registrate">registrate</Link></li>
            </>
          }
          
          
          
        </ul>
      </nav>
    </header>
  )
}

export { Header }
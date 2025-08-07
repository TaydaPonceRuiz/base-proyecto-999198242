import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header style={{ backgroundColor:"lightblue"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="imagen de logo" />
      <nav>
        <ul>
          {/*cambiar elementos a por componentes Link de react-router-dom*/}
          <li><Link to="/">inicio</Link></li>
          <li><Link to="/dashboard">dashboard</Link></li>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/registrate">registrate</Link></li>
          <button>cerrar sesion</button>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
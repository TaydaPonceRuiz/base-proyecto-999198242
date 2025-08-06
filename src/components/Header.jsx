const Header = () => {
  return (
    <header style={{ backgroundColor:"lightblue" }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="imagen de logo" />
      <nav>
        <ul>
          {/*cambiar elementos a por componentes Link de react-router-dom*/}
          <li><a href="/">inicio</a></li>
          <li><a href="/dashboard">dashboard</a></li>
          <li><a href="/login">login</a></li>
          <li><a href="/registrate">registrate</a></li>
          <button>cerrar sesion</button>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
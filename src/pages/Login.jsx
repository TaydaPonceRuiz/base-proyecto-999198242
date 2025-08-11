import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"

const Login = () => {

  const { login } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()
    login()
  }

  return (
    <Layout>
      <h1>inicia sesion</h1>

      <section>
        <h2>hola, bienvenido de nuevo</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>correo electronico:</label>
            <input type="email" />
          </div>
          <div>
            <label>contraseña:</label>
            <input type="password" />
          </div>
          <button>ingresar</button>
        </form>
      </section>
    </Layout>
  )
}

export { Login }
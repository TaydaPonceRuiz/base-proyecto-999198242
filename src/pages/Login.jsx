import { Layout } from "../components/Layout"

const Login = () => {
  return (
    <Layout>
      <h1>inicia sesion</h1>

      <section>
        <h2>hola, bienvenido de nuevo</h2>
        <form>
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
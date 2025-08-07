import { Layout } from "../components/Layout"

const Register = () => {
  return (
    <Layout>
      <h1>registrate</h1>

      <section>
        <h2>hola, bienvenido</h2>
        <form>
          <div>
            <label>username:</label>
            <input type="text" />
          </div>
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

export { Register }
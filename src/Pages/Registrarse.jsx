import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"


const Registrarse = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {registrar, error} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        document.title = 'Registrarse | MusicBoxed'
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        const exito = registrar(name,email,password)
        if(exito){
            navigate('/');
        }
    }

    const handleReset = () => {
        setName('');
        setEmail('');
        setPassword('');
    }; 


    return(
    <section>
    <h1 className="page-title">Registrarse</h1>
      <section className="registrarse">
        <form onSubmit={handleSubmit} className="default-form">
          {error && <p className="error-message">{error}</p>}

          <div>
            <label htmlFor="nombre">Nombre de usuario</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="correo-r">Correo electrónico</label>
            <input
              type="email"
              id="correo-r"
              name="correo-r"
              placeholder="tunombre@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="contraseña-r">Contraseña</label>
            <input
              type="password"
              id="contraseña-r"
              name="contraseña-r"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="enviar">
            <button type="submit" className="envio btn btn-form">
              Registrarse
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="resetear btn btn-form"
            >
              Limpiar Formulario
            </button>
          </div>
        </form>
      </section>
    </section>
    )
}
export default Registrarse
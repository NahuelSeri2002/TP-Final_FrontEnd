import { useState, useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"


const IniciarSesion = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login, error} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        document.title = 'Iniciar Sesion | MusicBoxed'
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        const exito = login(email,password)
        if(exito){
            navigate('/');
        }
    }

    const handleReset = () => {
        setEmail('');
        setPassword('');
    }; 
            
    return (
        <section>
            <h1 className="page-title">Iniciar Sesion</h1>
            <section className="inicio-sesion">
                <form onSubmit={handleSubmit} className="default-form">
                    <div>
                        <label htmlFor="correo-l">Correo electrónico</label>
                        <input 
                        type="email" 
                        name="correo-l" 
                        id="correo-l"
                        placeholder="tunombre@ejemplo.com"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required 
                        />
                    </div>

                    <div>
                        <label htmlFor="contraseña-l">Contraseña</label>
                        <input 
                        type="password" 
                        name="contraseña-l" 
                        id="contraseña-l"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required 
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <div className="enviar">
                        <button type="submit" className="envio btn btn-form">
                            Iniciar Sesion
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
export default IniciarSesion
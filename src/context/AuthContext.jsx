import {  createContext, useContext, useState } from "react"


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(() => {
        const guardado = localStorage.getItem("usuario")
        return guardado ? JSON.parse(guardado) : null
    });

    const [error, setError] = useState(null);

    const guardarSesion = (usuarioLogeado) =>{
        setUsuario(usuarioLogeado)
        localStorage.setItem("usuario", JSON.stringify(usuarioLogeado))
    }

    const registrar = (name, email, password) => {
        setError(null)

        const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios_registrados")) || [];

        const yaExiste = usuariosGuardados.some((u) => u.email.toLowerCase() === email.toLowerCase())
        if(yaExiste){
            setError("Este email ya esta registrado");
            return false;
        }

        const nuevoUsuario ={
            id: Date.now(),
            name,
            email,
            password,
        };

        guardarSesion(nuevoUsuario)
        return true;
    }

    const login = (email, password) =>{
        setError(null)

        const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios_registrados")) || [];

        const usuarioEncontrado = usuariosGuardados.find(
            (u) => u.email.toLowerCase() === email.toLowerCase && u.password === password
        );

        if(!usuarioEncontrado){
            setError("Email o contraseña incorrectos")
            return false;
        }

        guardarSesion(usuarioEncontrado);
        return true;
    }

    const logout = () => {
        setUsuario(null)
        localStorage.removeItem("usuario")
    }

    return(
        <AuthContext.Provider value={{usuario, error, login, registrar, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}



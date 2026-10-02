import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        <div className="app-layout">
            <header>
                <nav className="navbar">
                    <Link to="/" className="logo"><i className="fa-regular fa-headphones"></i>MusicBoxed</Link>
                    <ul className="nav-links">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to='/puntuacion'>Puntuacion</Link></li>
                        <li><Link to='/galeria'>Galeria</Link></li>
                        <li><Link to='/iniciar-sesion'>Iniciar Sesion</Link></li>
                        <li><Link to='/registrarse'>Registrarse</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <ul className="footer-nav">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to='/puntuacion'>Puntuacion</Link></li>
                    <li><Link to='/galeria'>Galeria</Link></li>
                    <li><Link to='/iniciar-sesion'>Iniciar Sesion</Link></li>
                    <li><Link to='/registrarse'>Registrarse</Link></li>
                </ul>
                <div className="footer-social">
                    <Link to="#" aria-label="Instagram" className="instagram"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="#" aria-label="Spotify" className="spotify"><i className="fa-brands fa-spotify"></i></Link>
                </div>
                <p>© 2026 MusicBoxed. Todos los derechos reservados</p>
            </footer>
        </div>
    )
}

export default Layout
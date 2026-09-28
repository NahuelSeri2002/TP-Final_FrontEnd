import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        <body>  
            <header>
                <nav className="navbar">
                    <Link to="/" className="logo"><i className="fa-regular fa-headphones"></i>MusicBoxed</Link>
                    <ul className="nav-links">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link></Link></li>
                        <li><Link></Link></li>
                        <li><Link></Link></li>
                        <li><Link></Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <ul className="footer-nav">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link></Link></li>
                    <li><Link></Link></li>
                    <li><Link></Link></li>
                    <li><Link></Link></li>
                </ul>
                <div className="footer-social">
                    <Link to="#" aria-label="Instagram" className="instagram"><i class="fa-brands fa-instagram"></i></Link>
                    <Link to="#" aria-label="Spotify" className="spotify"><i class="fa-brands fa-spotify"></i></Link>
                </div>
                <p>© 2026 MusicBoxed. Todos los derechos reservados</p>
            </footer>
        </body>
    )
}

export default Layout
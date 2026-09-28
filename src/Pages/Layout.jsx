import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        <main>
            <nav className="navbar">
                <Link to="/" className="logo"><i className="fa-regular fa-headphones">MusicBoxed</i></Link>
            </nav>
        </main>
    )
}

export default Layout
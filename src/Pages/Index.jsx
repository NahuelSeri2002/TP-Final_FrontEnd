import { useEffect } from "react";
import { Link } from "react-router-dom";

function Index(){
    useEffect(() => {
        document.title = 'Inicio | MusicBoxed';
        }, []);

    return(
        <section className="hero">
            <h1>MusicBoxed</h1>
                <p>Organiza tu universo musical.</p>
                <p>Puntúa tus discos y playlists favoritos.</p>
                <p>Recomienda lo mejor a tu gente.</p>
                <Link to="/puntuacion" className="btn btn-primary">Comienza a Puntuar</Link>
        </section>
    )
}

export default Index;
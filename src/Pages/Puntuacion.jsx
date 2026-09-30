import { useEffect } from 'react';
import AlbumCard from "../Components/AlbumCard"
import { albumsData } from "../data/albums"

const Puntuacion = () =>{

    useEffect(()=>{
        document.title = 'Puntuacion | MusicBoxed'
    }, []);

    return(
    <section className="puntuacion">
        <h1 className="page-title">Puntuación</h1>
        
        <div className="cards-container">
          {albumsData.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
    </section>
    )
}
export default Puntuacion
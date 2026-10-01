import { useEffect } from "react";
import AlbumCard from "../Components/AlbumCard";
import { albumsData } from "../data/albums";
import { useState } from "react";

const Puntuacion = () => {
  const [search, setSearch] = useState("");

  const filteredAlbums = albumsData.filter(
    (album) =>
      album.title.toLowerCase().includes(search.toLowerCase()) ||
      album.artist.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    document.title = "Puntuacion | MusicBoxed";
  }, []);

  return (
    <section className="puntuacion">
      <h1 className="page-title">Puntuación</h1>
      <input
        className="search-bar"
        type="text"
        placeholder="Buscar por artista o álbum..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="cards-container">
        {filteredAlbums.length > 0 ? (
          filteredAlbums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))
        ) : (
          <h2>No se encontraron resultados</h2>
        )}
      </div>
    </section>
  );
};
export default Puntuacion;

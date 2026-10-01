import { useEffect } from 'react';
import { galeriaData } from '../data/albums';

function Galeria(){
    useEffect(() => {
    document.title = 'Galería | MusicBoxed';
    }, []);

    return(
    <section>
      <h1 className="page-title">Galería</h1>
      <section className="galeria-section">
        <div className="galeria">
          {galeriaData.map((item) => (
            <img
              key={item.id}
              className="galeria-item"
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </section>  
    </section>
    )
}
export default Galeria
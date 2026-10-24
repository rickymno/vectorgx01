import FilmCard from '../FilmCard';

// La riga comunica la selezione: apertura e chiusura sono responsabilità del catalogo.
export default function FilmRow({film, onSelect}) {
  return (
    <div className='film-line' onClick={() => onSelect(film)}>
      <FilmCard film={film}/>
    </div>
  );
}

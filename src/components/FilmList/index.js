import FilmRow from '../FilmRow';

export default function FilmList({films, onFilmSelect}) {
  return (
    <div className='film-list'>
      {films.map(film => (
        <FilmRow key={film.id} film={film} onSelect={onFilmSelect}/>
      ))}
    </div>
  );
}

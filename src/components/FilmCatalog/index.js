import Pagination from '../Pagination';
import FilmList from '../FilmList';

// Componente di presentazione: riceve la pagina già pronta, senza gestire lo stato.
export default function FilmCatalog({films, currentPage, pageCount, onNext, onPrevious, onFilmSelect}) {
  return (
    <div className='film-catalog'>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onNext={onNext}
        onPrevious={onPrevious}
      />
      <FilmList films={films} onFilmSelect={onFilmSelect}/>
    </div>
  );
}

import films from './data/films';
import useFilmCatalog from './hooks/useFilmCatalog';
import Header from './components/Header';
import FilmCatalog from './components/FilmCatalog';
import Preview from './components/Preview';
import SpaceLine from './components/Spacer/SpaceLine';

// App collega la logica ai componenti; non calcola pagine e non contiene dati dei filmati.
export default function App() {
  const catalog = useFilmCatalog(films);

  return (
    <div className='vector-app'>
      <Header lineMotion={catalog.lineMotion}/>
      <FilmCatalog
        films={catalog.visibleFilms}
        currentPage={catalog.currentPage}
        pageCount={catalog.pageCount}
        onNext={catalog.showNextPage}
        onPrevious={catalog.showPreviousPage}
        onFilmSelect={catalog.openPreview}
      />
      <div className='catalog-footer'>
        <SpaceLine variant='brand' color='white' borderColor='black'/>
      </div>
      {/* Un'unica anteprima aperta per tutto il catalogo. */}
      {catalog.selectedFilm && (
        <Preview film={catalog.selectedFilm} onClose={catalog.closePreview}/>
      )}
    </div>
  );
}

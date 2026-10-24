import PageIndicator from '../PageIndicator';

// Il numero di indicatori arriva dalla logica, non da un array fisso di quattro pagine.
export default function Pagination({currentPage, pageCount, onNext, onPrevious}) {
  const pages = Array.from({length: pageCount}, (_, index) => index + 1);

  return (
    <div className='film-pagination'>
      {/* Con zero o una pagina i comandi restano visibili ma non sono attivabili. */}
      <button className='page-button' type='button' onClick={onPrevious} disabled={pageCount <= 1}>
        <div className='page-button-label'>...back</div>
      </button>
      {pages.map(page => (
        <PageIndicator key={page} active={page === currentPage} page={page}/>
      ))}
      <button className='page-button' type='button' onClick={onNext} disabled={pageCount <= 1}>
        <div className='page-button-label'>next...</div>
      </button>
    </div>
  );
}

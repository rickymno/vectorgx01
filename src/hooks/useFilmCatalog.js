import {useCallback, useState} from 'react';

// Tutte le decisioni del catalogo vivono qui; i componenti ricevono valori e azioni.
export default function useFilmCatalog(films, pageSize = 10) {
  const [requestedPage, setCurrentPage] = useState(1);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [lineMotion, setLineMotion] = useState({id: 0, direction: 'next'});

  // Gli indici si calcolano dalla pagina: non servono più tre stati sincronizzati.
  const pageCount = Math.max(1, Math.ceil(films.length / pageSize));
  // Se l'array si accorcia, conserva l'ultima pagina disponibile senza mostrare una pagina vuota.
  const currentPage = Math.min(requestedPage, pageCount);
  if (requestedPage !== currentPage) setCurrentPage(currentPage);
  const firstFilmIndex = (currentPage - 1) * pageSize;
  const visibleFilms = films.slice(firstFilmIndex, firstFilmIndex + pageSize);

  const changePage = useCallback(direction => {
    // Nessuno spostamento o animazione quando tutti i filmati stanno nella stessa pagina.
    if (pageCount <= 1) return;
    const step = direction === 'next' ? 1 : -1;
    setCurrentPage(page => ((page - 1 + step + pageCount) % pageCount) + 1);
    setSelectedFilm(null);
    // Il contatore riavvia la fascia anche dopo click consecutivi nella stessa direzione.
    setLineMotion(previous => ({id: previous.id + 1, direction}));
  }, [pageCount]);

  const showNextPage = useCallback(() => changePage('next'), [changePage]);
  const showPreviousPage = useCallback(() => changePage('back'), [changePage]);
  const openPreview = useCallback(film => setSelectedFilm(film), []);
  const closePreview = useCallback(() => setSelectedFilm(null), []);

  return {
    currentPage,
    pageCount,
    visibleFilms,
    selectedFilm,
    lineMotion,
    showNextPage,
    showPreviousPage,
    openPreview,
    closePreview,
  };
}

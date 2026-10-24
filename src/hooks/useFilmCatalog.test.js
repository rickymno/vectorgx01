import {fireEvent, render, screen} from '@testing-library/react';
import useFilmCatalog from './useFilmCatalog';

// Un catalogo di prova permette di verificare casi oltre le quattro pagine attuali.
function CatalogHarness({films}) {
  const catalog = useFilmCatalog(films);
  return (
    <div>
      <output aria-label='pagina'>{catalog.currentPage}</output>
      <output aria-label='pagine totali'>{catalog.pageCount}</output>
      <output aria-label='filmati visibili'>{catalog.visibleFilms.map(film => film.title).join(',')}</output>
      <output aria-label='direzione'>{catalog.lineMotion.direction}</output>
      <output aria-label='cambi pagina'>{catalog.lineMotion.id}</output>
      <button onClick={catalog.showNextPage}>avanti</button>
      <button onClick={catalog.showPreviousPage}>indietro</button>
    </div>
  );
}

test('il quarantunesimo filmato è raggiungibile e i click ripetuti riavviano la fascia', () => {
  const films = Array.from({length: 41}, (_, index) => ({id: index + 1, title: `film-${index + 1}`}));
  render(<CatalogHarness films={films}/>);
  expect(screen.getByLabelText('pagine totali')).toHaveTextContent('5');
  for (let index = 0; index < 4; index += 1) fireEvent.click(screen.getByText('avanti'));
  expect(screen.getByLabelText('pagina')).toHaveTextContent('5');
  expect(screen.getByLabelText('filmati visibili').textContent).toBe('film-41');
  expect(screen.getByLabelText('cambi pagina')).toHaveTextContent('4');
  expect(screen.getByLabelText('direzione')).toHaveTextContent('next');
  fireEvent.click(screen.getByText('avanti'));
  expect(screen.getByLabelText('pagina')).toHaveTextContent('1');
  fireEvent.click(screen.getByText('indietro'));
  expect(screen.getByLabelText('pagina')).toHaveTextContent('5');
  expect(screen.getByLabelText('direzione')).toHaveTextContent('back');
});

test('il catalogo vuoto rimane su una pagina valida senza elementi', () => {
  render(<CatalogHarness films={[]}/>);
  fireEvent.click(screen.getByText('avanti'));
  fireEvent.click(screen.getByText('indietro'));
  expect(screen.getByLabelText('pagina')).toHaveTextContent('1');
  expect(screen.getByLabelText('filmati visibili').textContent).toBe('');
});

import {render, screen} from '@testing-library/react';
import Pagination from './index';

// I comandi seguono il numero di pagine calcolato dall'array del catalogo.
test('disabilita i comandi su una pagina e li riattiva quando le pagine aumentano', () => {
  const {rerender} = render(<Pagination currentPage={1} pageCount={1}/>);
  screen.getAllByRole('button').forEach(button => expect(button).toBeDisabled());
  rerender(<Pagination currentPage={1} pageCount={5}/>);
  screen.getAllByRole('button').forEach(button => expect(button).toBeEnabled());
  expect(document.querySelectorAll('.pagination-marker')).toHaveLength(4);
  expect(screen.getByText('1')).toHaveAttribute('class', 'pagination-number');
});

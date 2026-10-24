import {fireEvent, render, screen, within} from '@testing-library/react';
import App from './App';

// Verifiche sui comportamenti del catalogo, al posto del test iniziale di Create React App.
test('mostra dieci filmati e naviga in entrambe le direzioni', () => {
  render(<App/>);
  expect(screen.getByText('acqua ride')).toBeInTheDocument();
  expect(screen.queryByText('computer')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', {name: 'next...'}));
  expect(screen.getByText('computer')).toBeInTheDocument();
  expect(screen.queryByText('acqua ride')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', {name: '...back'}));
  expect(screen.getByText('acqua ride')).toBeInTheDocument();
});

test('back dalla prima pagina mostra gli ultimi sei filmati e next torna alla prima', () => {
  render(<App/>);
  fireEvent.click(screen.getByRole('button', {name: '...back'}));
  expect(screen.getByText('volcano mine')).toBeInTheDocument();
  expect(screen.queryByText('sci')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name: 'next...'}));
  expect(screen.getByText('acqua ride')).toBeInTheDocument();
});

test('apre il filmato selezionato e ripristina lo scorrimento con Escape o la X', () => {
  render(<App/>);
  const originalOverflow = document.body.style.overflow;
  fireEvent.click(screen.getByText('air desertstorm'));
  const dialog = screen.getByRole('dialog', {name: 'air desertstorm'});
  expect(within(dialog).getByAltText('Anteprima di air desertstorm')).toBeInTheDocument();
  expect(document.body.style.overflow).toBe('hidden');
  expect(within(dialog).getByRole('button', {name: 'Chiudi anteprima'})).toHaveFocus();
  fireEvent.click(dialog);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  fireEvent.keyDown(document, {key: 'Escape'});
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe(originalOverflow);

  fireEvent.click(screen.getByText('acqua ride'));
  fireEvent.click(screen.getByRole('button', {name: 'Chiudi anteprima'}));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

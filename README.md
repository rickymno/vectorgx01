# Vector GX-01 — catalogo filmati

Webapp React per sfogliare il catalogo e aprire le anteprime del simulatore.

## Dove mettere le mani

- `src/data/films.js`: elenco dei filmati, titoli, miniature e URL delle anteprime. I contenuti provvisori sono indicati nel file.
- `src/hooks/useFilmCatalog.js`: pagina corrente, selezione del filmato e direzione della fascia animata.
- `src/hooks/usePreviewDialog.js`: focus, Escape e blocco dello scorrimento quando l'anteprima è aperta.
- `src/components/`: struttura visiva. FilmCatalog combina Pagination e FilmList; ogni FilmRow visualizza una FilmCard. Preview riceve il filmato selezionato.
- `src/styles/typography.css`: contorni neri sul testo bianco e bianchi sul testo scuro.
- `src/styles/components.css`: aspetto di base dei componenti, estratto dagli stili inline.
- `src/index.css`: palette, font, layout responsive e animazioni esistenti.

`App.js` collega dati, logica e componenti. Per aggiungere un filmato si modifica il file dei dati: pagine e indicatori si calcolano automaticamente (10 filmati per pagina).

Con 10 filmati c'è una pagina, con 11 due, con 41 cinque. Avanti e indietro sono ciclici e si disabilitano quando basta una pagina. Se l'array si accorcia, la pagina selezionata rientra nell'intervallo disponibile. Il secondo parametro di `useFilmCatalog(films, pageSize)` permette di cambiare il numero di filmati per pagina.

Le proprietà si chiamano `thumbnail` e `preview`; gli ID e i titoli originali sono conservati. Il catalogo usa una sola finestra di anteprima. Le linee decorative mantengono la prop `animation`.

## Avvio e verifica

```sh
npm ci
npm start
npm test -- --watchAll=false --runInBand
npm run build
```

La build pronta per l'hosting è nella cartella `build/`. I test controllano la navigazione, la selezione del filmato e la chiusura dell'anteprima. Nessun backend o database è richiesto.

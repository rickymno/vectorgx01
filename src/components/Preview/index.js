import {createPortal} from 'react-dom';
import usePreviewDialog from '../../hooks/usePreviewDialog';
import FilmTitle from '../FilmTitle';
import SpaceLine from '../Spacer/SpaceLine';
import vectorLogo from '../../assets/vector_gx01_logo.png';

// Solo struttura della finestra; comportamento in usePreviewDialog e contenuti in data/films.
export default function Preview({film, onClose}) {
  const closeButtonRef = usePreviewDialog(onClose);

  return createPortal(
    <div className='film-preview-backdrop' onClick={onClose}>
      <div
        className='film-preview'
        role='dialog'
        aria-modal='true'
        aria-label={film.title}
        onClick={event => event.stopPropagation()}
      >
        <img className='preview-brand-logo' src={vectorLogo} alt='Vector GX-01 — Simulation Frame Unit'/>
        <div className='film-preview-header'>
          <FilmTitle id={film.id} title={film.title}/>
          <div className='preview-header-line' aria-hidden='true'>
            <SpaceLine size='15px' color='white' borderColor='black'/>
          </div>
          <button
            ref={closeButtonRef}
            className='preview-close-button'
            type='button'
            aria-label='Chiudi anteprima'
            onClick={onClose}
          >
            <div className='preview-close-label'>✖︎</div>
          </button>
        </div>
        <div className='preview-media'>
          <img src={film.preview} alt={`Anteprima di ${film.title}`}/>
        </div>
      </div>
    </div>,
    document.body
  );
}

import FilmTitle from '../FilmTitle';
import SpaceLine from '../Spacer/SpaceLine';
import FilmThumbnail from '../FilmThumbnail';

export default function FilmCard({film}) {
  return (
    <div className='film-card'>
      <FilmTitle id={film.id} title={film.title}/>
      <div className='film-decoration'>
        <SpaceLine color='white' size='15px' borderColor='black'/>
      </div>
      <FilmThumbnail thumbnail={film.thumbnail} title={film.title}/>
    </div>
  );
}

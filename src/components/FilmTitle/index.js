import Text from '../Text';

export default function FilmTitle({id, title}) {
  return (
    <div className='film-title'>
      <Text text={id} size='35px' margin='5px' color='black' outlineColor='var(--eva-purple)'/>
      <Text text={title} size='40px' color='white'/>
    </div>
  );
}

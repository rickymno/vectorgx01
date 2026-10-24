import Spacer from '../Spacer';

export default function FilmThumbnail({thumbnail, title}) {
  return (
    <div className='film-thumbnail'>
      <div className='thumbnail-accents'>
        <Spacer size='15px' color='white' borderColor='black' opacity='60%' flex={0.3}/>
        <Spacer size='35px' color='white' borderColor='black' opacity='70%' flex={0.5}/>
        <Spacer size='55px' color='white' borderColor='black' opacity='80%' flex={0.8}/>
      </div>
      <div className='film-thumbnail-frame'>
        <img src={thumbnail} width='130px' height='80px' alt={title}/>
      </div>
      <div className='thumbnail-accents'>
        <Spacer size='55px' color='white' borderColor='black' opacity='80%' flex={0.8}/>
        <Spacer size='35px' color='white' borderColor='black' opacity='70%' flex={0.5}/>
        <Spacer size='15px' color='white' borderColor='black' opacity='60%' flex={0.3}/>
      </div>
    </div>
  );
}

import Text from '../Text';
import SpaceLine from '../Spacer/SpaceLine';
import vectorLogo from '../../assets/vector_gx01_logo.png';

export default function Header({lineMotion}) {
  return (
    <div className='film-header'>
      <div className='brand-header'>
        <img className='brand-header-logo' src={vectorLogo} alt='Vector GX-01 — Simulation Frame Unit'/>
        {/* Solo questa fascia riceve il segnale di animazione dal catalogo. */}
        <SpaceLine
          variant='brand'
          color='white'
          animation={true}
          direction={lineMotion.direction}
          animationKey={lineMotion.id}
        />
      </div>
      <div className='catalog-heading'>
        <Text text='lista dei filmati' size='45px' color='white'/>
      </div>
    </div>
  );
}

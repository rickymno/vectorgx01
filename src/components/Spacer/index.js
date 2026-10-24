// Il riempimento può essere trasparente; il bordo nero resta sempre pieno.
export default function Spacer({size, color, flex, opacity, borderColor = 'black'}) {
  return (
    <div className='line-segment' style={{flex, height: size, borderColor}}>
      <span style={{backgroundColor: color, opacity}}/>
    </div>
  );
}

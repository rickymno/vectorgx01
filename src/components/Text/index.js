export default function Text({text, size, margin, color}) {
  // Contorno scuro sul bianco, chiaro sul testo nero o viola; la regola grafica è nel CSS.
  const outlineColor = color === 'white' ? '#000' : '#fff';

  return (
    <div>
      <h1
        className='outlined-text'
        style={{fontSize: size, fontFamily: 'Avenger', marginRight: margin, marginLeft: margin, color, '--text-outline-color': outlineColor}}
      >
        {text}
      </h1>
    </div>
  );
}

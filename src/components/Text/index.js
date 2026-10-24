export default function Text({text, size, margin, color, outlineColor: customOutlineColor}) {
  // Contorno scuro sul bianco, chiaro sul testo nero o viola; la regola grafica è nel CSS.
  // I numeri possono scegliere il viola Eva 01 senza cambiare gli altri testi.
  const outlineColor = customOutlineColor ?? (color === 'white' ? '#000' : '#fff');

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

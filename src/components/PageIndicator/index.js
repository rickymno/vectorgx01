export default function PageIndicator({active, page}) {
  if (!active) return <div className='pagination-marker'/>;

  return (
    <div className='pagination-current' aria-current='page'>
      <span className='pagination-number'>{page}</span>
    </div>
  );
}

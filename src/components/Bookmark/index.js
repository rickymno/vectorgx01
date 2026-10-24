/* eslint-disable eqeqeq */
import React,{useState} from 'react';
import Square from '../Square'
import List from '../List';
// Miniatura condivisa già presente negli assets: inclusa nella build, senza URL esterni.
import filmThumbnail from '../../assets/astroviaje.0.jpg';


const array=['1','2','3','4']

// Titoli in minuscolo per la corretta resa del font Avenger; nomi e spazi invariati.
const item =[
    {
    id:'1',
    title:'acqua ride',
    tumbnail:filmThumbnail,
  },
  { 
    id:'2',
    title:'air barnstorm',
    tumbnail:filmThumbnail,
  },
  {
    id:'3',
    title:'air desertstorm',
    tumbnail:filmThumbnail,
  },
  {
    id:'4',
    title:'air elicottero',
    tumbnail:filmThumbnail,
  },
  {
    id:'5',
    title:'air harrier jet',
    tumbnail:filmThumbnail,
  },
  {
    id:'6',
    title:'air mach6',
    tumbnail:filmThumbnail,
  },
  {
    id:'7',
    title:'air tornado',
    tumbnail:filmThumbnail,
  },
  {
    id:'8',
    title:'alton towers',
    tumbnail:filmThumbnail,
  },
  {
    id:'9',
    title:'astro canyon',
    tumbnail:filmThumbnail,
  },
  {
    id:'10',
    title:'bob',
    tumbnail:filmThumbnail,
  },
  {
    id:'11',
    title:'computer',
    tumbnail:filmThumbnail,
  },
  {
    id:'12',
    title:'crash test',
    tumbnail:filmThumbnail,
  },
  {
    id:'13',
    title:'future city',
    tumbnail:filmThumbnail,
  },
  {
    id:'14',
    title:'glacier run',
    tumbnail:filmThumbnail,
  },
  {
    id:'15',
    title:'gran prix f1',
    tumbnail:filmThumbnail,
  },
  {
    id:'16',
    title:'kid coaster',
    tumbnail:filmThumbnail,
  },
  {
    id:'17',
    title:'marte explorer',
    tumbnail:filmThumbnail,
  },
  {
    id:'18',
    title:'montagne russe',
    tumbnail:filmThumbnail,
  },
  {
    id:'19',
    title:'moto fogarty',
    tumbnail:filmThumbnail,
  },
  {
    id:'20',
    title:'moto valentino',
    tumbnail:filmThumbnail,
  },
  {
    id:'21',
    title:'moto yamaha',
    tumbnail:filmThumbnail,
  },
  {
    id:'22',
    title:'race way',
    tumbnail:filmThumbnail,
  },
  {
    id:'23',
    title:'rally cosworth',
    tumbnail:filmThumbnail,
  },
  {
    id:'24',
    title:'rally delta',
    tumbnail:filmThumbnail,
  },
  {
    id:'25',
    title:'rally impreza',
    tumbnail:filmThumbnail,
  },
  {
    id:'26',
    title:'rally portugal',
    tumbnail:filmThumbnail,
  },
  {
    id:'27',
    title:'rally punto',
    tumbnail:filmThumbnail,
  },
  {
    id:'28',
    title:'rgb space adventure',
    tumbnail:filmThumbnail,
  },
  {
    id:'29',
    title:'roller coaster',
    tumbnail:filmThumbnail,
  },
  {
    id:'30',
    title:'sci',
    tumbnail:filmThumbnail,
  },
  {
    id:'31',
    title:'slot car boogie',
    tumbnail:filmThumbnail,
  },
  {
    id:'32',
    title:'superstition',
    tumbnail:filmThumbnail,
  },
  {
    id:'33',
    title:'time machine',
    tumbnail:filmThumbnail,
  },
  {
    id:'34',
    title:'viaggio in egitto',
    tumbnail:filmThumbnail,
  },
  {
    id:'35',
    title:'visions',
    tumbnail:filmThumbnail,
  },
  {
    id:'36',
    title:'volcano mine',
    tumbnail:filmThumbnail,
  },
  
  ]
  
  export default function Bookmark({onPageChange}) {
      const [focusedPage, setPage] = useState(1)
      const [min,setMin]=useState(0)
      const [max,setMax]=useState(10)

    return (
        /* Il catalogo e la navigazione si adattano anche agli schermi stretti. */
        <div className='film-catalog'>
        <div className='film-pagination' style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'row', marginBottom:'30px'}}>
       
        <button className='page-button' style={{backgroundColor:'white',width:'180px', height:'65px',border:'solid',borderWidth:'4px',borderColor:'black',WebkitTransform:'-moz-initial',transform: 'skewX(-16deg)',
        margin:'35px',fontFamily:'avenger',fontSize:'40px',justifyContent:'center',boxShadow:'8px 8px 3px var(--interactive-shadow)'}} onClick={() => {onPageChange?.('back'); setPage(focusedPage > 1 ? focusedPage - 1 : 4); setMin(min>0 ? min - 10 : 30); setMax(max>10? max-10 : 40)}}
        >
        <div style={{transform: 'skewX(16deg)',justifyContent:'center', marginTop:'7px'}}>...back </div>
      </button>
            {/* Chiavi stabili per gli indicatori delle pagine. */}
            {array.map((id)=> id == focusedPage ? <Square key={id} active focusedPage={focusedPage}/> : <Square key={id}/>)}
            <button className='page-button' style={{backgroundColor:'white',width:'175px',height:'65px',border:'solid',borderWidth:'4px',borderColor:'black',WebkitTransform:'-moz-initial',transform: 'skewX(-16deg)',
        margin:'25px',fontFamily:'avenger',fontSize:'40px',justifyContent:'center',boxShadow:'8px 8px 3px var(--interactive-shadow)'}}
                    onClick={() => {onPageChange?.('next'); setPage(focusedPage < 4 ? focusedPage + 1 : 1); setMin(min<30 ? min + 10 : 0); setMax(max<40 ? max+10 : 10)} }>
          <div style={{transform: 'skewX(16deg)', marginTop:'7px' }}>next...</div>
        
      </button>
        </div>
        <List item={item} min={min} max={max}/>
        </div>
    )
}

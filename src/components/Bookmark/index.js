/* eslint-disable eqeqeq */
import React,{useState} from 'react';
import Square from '../Square'
import List from '../List';


const array=['1','2','3','4']

const item =[
    {
    id:'1',
    title:'Acqua Ride',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  { 
    id:'2',
    title:'Air Barnstorm',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'3',
    title:'Air Desertstorm',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'4',
    title:'Air Elicottero',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'5',
    title:'Air Harrier Jet',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'6',
    title:'Air Mach6',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'7',
    title:'Air Tornado',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'8',
    title:'Alton Towers',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'9',
    title:'Astro Canyon',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'10',
    title:'Bob',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'11',
    title:'Computer',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'12',
    title:'Crash Test',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'13',
    title:'Future City',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'14',
    title:'Glacier Run',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'15',
    title:'Gran Prix F1',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'16',
    title:'Kid Coaster',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'17',
    title:'Marte Explorer',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'18',
    title:'Montagne Russe',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'19',
    title:'Moto Fogarty',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'20',
    title:'Moto Valentino',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'21',
    title:'Moto Yamaha',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'22',
    title:'Race Way',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'23',
    title:'Rally Cosworth',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'24',
    title:'Rally Delta',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'25',
    title:'Rally Impreza',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'26',
    title:'Rally Portugal',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'27',
    title:'Rally Punto',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'28',
    title:'RGB Space Adventure',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'29',
    title:'Roller Coaster',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'30',
    title:'Sci',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'31',
    title:'Slot Car Boogie',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'32',
    title:'Superstition',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'33',
    title:'Time Machine',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'34',
    title:'Viaggio in Egitto',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'35',
    title:'Visions',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  {
    id:'36',
    title:'Volcano Mine',
    tumbnail:'https://www.nwave.com/wp-content/uploads/2015/10/ASTRO1.jpg',
  },
  
  ]
  
  export default function Bookmark() {
      const [focusedPage, setPage] = useState(1)
      const [min,setMin]=useState(0)
      const [max,setMax]=useState(10)

    return (
        <div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'row', marginBottom:'30px'}}>
       
        <button style={{backgroundColor:'white',width:'180px', height:'65px',border:'solid',borderWidth:'4px',borderColor:'black',WebkitTransform:'-moz-initial',transform: 'skewX(-16deg)',
        margin:'35px',fontFamily:'avenger',fontSize:'40px',justifyContent:'center',boxShadow:'8px 8px 3px darkred'}} onClick={() => {setPage(focusedPage > 1 ? focusedPage - 1 : 4); setMin(min>0 ? min - 10 : 30); setMax(max>10? max-10 : 40)}}
        >
        <div style={{transform: 'skewX(16deg)',justifyContent:'center', marginTop:'7px'}}>...back </div>
      </button>
            {array.map((id=array.indexOf(focusedPage-1))=> id == focusedPage ? <Square active focusedPage={focusedPage}/> : <Square/>  )}
            <button style={{backgroundColor:'white',width:'175px',height:'65px',border:'solid',borderWidth:'4px',borderColor:'black',WebkitTransform:'-moz-initial',transform: 'skewX(-16deg)',
        margin:'25px',fontFamily:'avenger',fontSize:'40px',justifyContent:'center',boxShadow:'8px 8px 3px darkred'}} 
                    onClick={() => {setPage(focusedPage < 4 ? focusedPage + 1 : 1); setMin(min<30 ? min + 10 : 0); setMax(max<40 ? max+10 : 10)} }>
          <div style={{transform: 'skewX(16deg)', marginTop:'7px' }}>next...</div>
        
      </button>
        </div>
        <List item={item} min={min} max={max}/>
        </div>
    )
}

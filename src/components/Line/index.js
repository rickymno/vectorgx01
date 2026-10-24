import React, {useState} from 'react'
import Preview from '../Preview'
import FilmListLine from './FilmListLine'

export default function Line({id,title,tumbnail}) {
    const [toogle, setToogle] = useState(false)
    return (
        /* La riga resta visibile sotto la patina; solo i controlli del dialogo la chiudono. */
        <div className='film-line' onClick={() => setToogle(true)} style={{display:'flex',flexDirection:'row',padding:'5px',paddingTop:'10px',justifyContent:'center',alignItems:'flex-end',height:'100px',maxHeight:'500px',marginBottom:'20px',width:'720px'}}>
            <FilmListLine id={id} title={title} tumbnail={tumbnail}/>
            {toogle && <Preview id={id} title={title} onClose={() => setToogle(false)}/>}
        </div>
    )
}

import React ,{useState} from 'react'
import Preview from '../Preview'
import FilmListLine from './FilmListLine'

export default function Line({id,title,tumbnail}) {
    const [toogle, setToogle] = useState(false)
    return (
        <div onClick={() => {setToogle(!toogle)}} style={{display:'flex',flexDirection:'row',padding:'5px',paddingTop:'10px',justifyContent:'center',alignItems:'flex-end',height:'100px',maxHeight:'500px',marginBottom:'20px',width:'720px'}}>
             {
             // eslint-disable-next-line
             toogle == true ?<div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'flex-end',flexDirection:'row'}}>
            <Preview id={id} title={title}/>
                <div style={{display:'flex',justifyContent:'center',width:'730px',height:'136px',opacity:'50%'}}>
                    <div style={{width:'730px',borderRadius:'10px',backgroundColor:'white',margin:'5px',marginBottom:'15px',border:'solid',borderWidth:'3px',borderColor:'black'}}></div>
                    </div>
 </div>: <FilmListLine id={id} title={title} tumbnail={tumbnail}/>}
        </div>
    )
}


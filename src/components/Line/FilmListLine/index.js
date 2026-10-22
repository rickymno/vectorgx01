import React from 'react'
import Title from '../../Title'
import SpaceLine from '../../Spacer/SpaceLine'
import Image from '../../Image'

export default function FilmListLine({id,title,tumbnail}) {
    return (
        <div style={{display:'flex',flexDirection:'row',padding:'5px', border:'solid',borderWidth:'3px',borderColor:'black',borderRadius:'10px', paddingTop:'10px',justifyContent:'center',alignItems:'flex-end',height:'95px',maxHeight:'500px',marginBottom:'15px',width:'730px',boxShadow:'3px 3px 9px darkred'}}>
            <Title id={id} title={title}/>
           <div style={{flex:1,marginBottom:'27px',justifyContent:'center'}}>
           <SpaceLine color='white' size='15px' borderColor='black'/>
           </div>
           <Image tumbnail={tumbnail} title={title}/> 
        </div>
    )
}

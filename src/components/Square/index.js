import React from 'react'
import Text from '../Text'

// disable width:'15px', height:'15px', backgroundColor:'white'
export default function Square({active,focusedPage}) {


if (active){
    return (
        <div style={{display:'flex', backgroundColor:'white',border:'solid', borderColor:'black',borderWidth:'4px', paddingRight:'5px',paddingBottom:'10px',justifyContent:'center',width:'55px', height:'50px', WebkitTransform:'-moz-initial',transform: 'skewX(-16deg)'}}>
            <div style={{transform: 'skewX(16deg)'}}>
            <Text text={focusedPage} size='30px' color='black'/>
            </div>
        </div>)
}
    return (<div style={{display:'flex',margin:'10px',WebkitTransform:'-moz-initial',transform: 'skewX(-16deg)', backgroundColor:'white', width:'15px', height:'25px',opacity:'75%'}}>
            
    </div>)
}

import React from 'react'
import Text from '../Text'

export default function Title({id,title}) {
    return (
        /* Il titolo va a capo sui telefoni senza allargare la pagina. */
        <div className='film-title' style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:'95px'}}>
            <Text text={id} size='35px' margin='5px' color='black'/>
            <Text text={title} size='40px' color='white'/>
        </div>
    )
}

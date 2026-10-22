import React from 'react'
import '../../fonts/AVENGEANCE HEROIC AVENGER.ttf'


export default function Text({text,size,margin,color}) {
    return (
        <div >
            <h1 style={{fontSize:size, fontFamily:'Avenger',marginRight:margin,marginLeft:margin,color:color}}>{text}</h1>
        </div>
    )
}

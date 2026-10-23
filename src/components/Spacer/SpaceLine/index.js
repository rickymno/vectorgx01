import React from 'react'
import Spacer from '../../Spacer'

// La variante brand è riservata alle fasce esterne; senza variante resta la linea originale.
export default function SpaceLine({size,color,borderColor,variant = 'default'}) {
    const isBrand = variant === 'brand'
    const lineSize = size || (isBrand ? 'clamp(52px, 9vw, 76px)' : undefined)
    return (
        <div className={isBrand ? 'space-line-brand' : undefined} style={{display:'flex',flex:1,flexDirection:'row',alignItems:'center',marginTop:isBrand ? 0 : '10px',marginBottom:isBrand ? 0 : '10px',marginLeft:'10px'}}>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.029} opacity='50%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.05} opacity='70%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.08} opacity='80%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.15} opacity='90%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={1}/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.15} opacity='90%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.08} opacity='80%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.05} opacity='70%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.029} opacity='50%'/>
        </div>
    )
}

import React from 'react'
import Spacer from '../../Spacer'

export default function SpaceLine({size,color,borderColor}) {
    return (
        <div style={{display:'flex',flex:1,flexDirection:'row',alignItems:'center',marginTop:'10px',marginBottom:'10px',marginLeft:'10px'}}>
            <Spacer size={size} color={color} borderColor={borderColor} flex={0.029} opacity='50%'/>
            <Spacer size={size} color={color} borderColor={borderColor} flex={0.05} opacity='70%'/>
            <Spacer size={size} color={color} borderColor={borderColor} flex={0.08} opacity='80%'/>
            <Spacer size={size} color={color} borderColor={borderColor} flex={0.15} opacity='90%'/>
            <Spacer size={size} color={color} borderColor={borderColor} flex={1}/>
            <Spacer size={size} color={color} borderColor={borderColor} flex={0.15} opacity='90%'/>
            <Spacer size={size} color={color} borderColor={borderColor} flex={0.08} opacity='80%'/>
            <Spacer size={size} color={color} borderColor={borderColor} flex={0.05} opacity='70%'/>
            <Spacer size={size} color={color} borderColor={borderColor} flex={0.029} opacity='50%'/>
        </div>
    )
}

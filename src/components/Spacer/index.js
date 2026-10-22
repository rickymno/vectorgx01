import React from 'react'

export default function Spacer({size,color,flex,opacity,borderColor}) {
    return (
        <div style={{display:'flex',flex:flex,height:size, WebkitTransform:'-moz-initial',marginRight:'2px',marginLeft:'2px', transform: 'skewX(-16deg)',backgroundColor:color,border:'solid',borderWidth:'1px',borderColor:borderColor, opacity:opacity}}>
        </div>
    )
}

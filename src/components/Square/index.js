import React from 'react'

export default function Square({active,focusedPage}) {
    if (active) {
        return (
            // Il numero ha un contenitore dedicato: niente padding asimmetrico o margini di Text/h1.
            <div className='pagination-current' aria-current='page'>
                <span className='pagination-number'>{focusedPage}</span>
            </div>
        )
    }
    return (
        <div style={{display:'flex',margin:'10px',transform:'skewX(-16deg)',backgroundColor:'white',width:'15px',height:'25px',opacity:'75%'}} />
    )
}

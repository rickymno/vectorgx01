import React from 'react';
import Line from '../Line';


export default function List({item,min,max}) {
   
    return (
        /* La lista eredita la larghezza disponibile dal contenitore. */
        <div className='film-list' style={{display:'flex',flexDirection:'column'}}>
          {item.slice(min,max).map((item)=> (
                <Line
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    tumbnail={item.tumbnail}
                />
            ))}
        </div>
    )
}

import React from 'react';
import Line from '../Line';


export default function List({item,min,max}) {
   
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
          {item.slice(min,max).map((item)=> (
                <Line
                    id={item.id}
                    title={item.title}
                    tumbnail={item.tumbnail}
                />
            ))}
        </div>
    )
}

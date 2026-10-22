import React from 'react'
import Title from '../Title'



export default function Preview({onClick,id,title}) {
    return (
    <div style={{display:'flex',zIndex:1000,position:'absolute', backgroundColor:'#e90003',flexDirection:'column',alignItems:'center',height:'490px',border:'solid',borderWidth:'6px', borderRadius:'10px',justifyContent:'center',width:'530px',boxShadow:'0px 0px 50px 10px white'}}>
            <div style={{display:'flex',width:'100%',marginLeft:'25px',flexDirection:'row',justifyContent:'space-between'}}>
                <Title id={id} title={title}/>
                <button style={{backgroundColor:'white',width:'69px', height:'40px',border:'solid',borderWidth:'2px',borderColor:'black',WebkitTransform:'-moz-initial',transform: 'skewX(-16deg)',margin:'20px',marginRight:'25px',fontFamily:'avenger',fontSize:'25px',justifyContent:'center',boxShadow:'3px 3px darkred'}}>
                    <div style={{transform: 'skewX(16deg)', marginTop:'2px'}}> ✖︎
                    </div>
                </button>
            </div>
            <div style={{display:'flex',backgroundColor:'green',flex:1,height:'90%',width:'90%',borderWidth:'2px',borderColor:'black',border:'solid',marginBottom:'10px'}}>
                <img style={{height:'100%',width:'100%',}} src='https://c.tenor.com/LNHAv74lhqgAAAAM/ma-io-che-ne-so-ma-io-che-ne-so-meme.gif' alt='apudodo'></img>
            </div>
    </div>
    )
}

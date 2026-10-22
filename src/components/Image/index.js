import React from 'react'
import Spacer from '../Spacer'




export default function Image({tumbnail,title}) {
    return (
        <>
    
        <div style={{display:'flex',height:'100px',width:'230px', justifyContent:'flex-start',alignItems:'center'}}>
            <div style={{display:'flex',flex:1,alignItems:'center',marginTop:'9px'}}>
            <Spacer size='15px' color='white' borderColor='black' opacity='60%' flex={0.3}/>
            <Spacer size='35px' color='white' borderColor='black' opacity='70%' flex={0.5}/>
            <Spacer size='55px' color='white' borderColor='black' opacity='80%' flex={0.8}/>
            </div>
            <div style={{display:'flex',backgroundColor:'white',marginLeft:'4px',transform: 'skewX(-16deg)',justifyContent:'center',alignItems:'center',borderWidth:'3px',border:'solid', WebkitTransform:'-moz-initial',width:'158px',height:'80px'}}>
            <img style={{transform: 'skewX(16deg)',border:'solid',borderColor:'black',borderWidth:'3px'}} src={tumbnail} width='130px' height='80px'  alt={title} />
            </div>
            <div style={{display:'flex',flex:1,alignItems:'center',marginTop:'9px'}}>
            <Spacer size='55px' color='white' borderColor='black' opacity='80%' flex={0.8}/>
            <Spacer size='35px' color='white' borderColor='black' opacity='70%' flex={0.5}/>
            <Spacer size='15px' color='white' borderColor='black' opacity='60%' flex={0.3}/>
            </div>
        </div>
       
        </>
    )
}

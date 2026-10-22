import React from 'react'
import Text from '../Text'
import SpaceLine from '../Spacer/SpaceLine'
import red_vector_logo from '../../assets/red_vector_logo.png'

export default function Header() {
    return (
        <div style={{display:'flex',justifyContent:'flex-start', width:'100%',backgroundColor:'#e90003',flexDirection:'column'}}>
            <div style={{display:'flex', flex:1,alignItems:'center', flexDirection:'column'}}>
            <img src={red_vector_logo} width='755px' height='700px' alt='red Vector_logo' />
            </div>
            <div style={{marginRight:'10px'}}>
            <SpaceLine size='30px' color='white'/>
            </div>
            <div style={{display:'flex',flex:1,justifyContent:'center',marginTop:'10px'}}>
            <Text text='Lista dei Filmati' size='45px' color='black'></Text>
            </div>
        </div>
    )
}

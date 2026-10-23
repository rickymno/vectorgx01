import React from 'react'
import Text from '../Text'
import SpaceLine from '../Spacer/SpaceLine'
// Logo Vector GX-01 fornito dall’utente, con sfondo trasparente.
import vector_gx01_logo from '../../assets/vector_gx01_logo.png'

export default function Header() {
    return (
        <div className='film-header' style={{display:'flex',justifyContent:'flex-start', width:'100%',backgroundColor:'var(--eva-purple)',flexDirection:'column'}}>
            {/* Solo nell’intestazione il logo si sovrappone alla fascia bianca più alta. */}
            <div className='brand-header'>
                <img className='brand-header-logo' src={vector_gx01_logo} alt='Vector GX-01 — Simulation Frame Unit' />
                <SpaceLine variant='brand' color='white'/>
            </div>
            <div style={{display:'flex',flex:1,justifyContent:'center',marginTop:'10px'}}>
            {/* Minuscole per mantenere uniforme la resa del font Avenger. */}
            {/* Titolo bianco, coerente con le altre scritte dell’interfaccia. */}
            <Text text='lista dei filmati' size='45px' color='white'></Text>
            </div>
        </div>
    )
}

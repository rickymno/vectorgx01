import React, {useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'
import Title from '../Title'



export default function Preview({onClose,id,title}) {
    const closeButton = useRef(null)

    // Blocca lo scorrimento dietro il vetro e permette la chiusura con Escape.
    useEffect(() => {
        const previousOverflow = document.body.style.overflow
        const previousFocus = document.activeElement
        document.body.style.overflow = 'hidden'
        closeButton.current?.focus()
        const handleKeyDown = event => {
            if (event.key === 'Escape') onClose()
            // Il pulsante di chiusura è l'unico controllo del dialogo.
            if (event.key === 'Tab') {
                event.preventDefault()
                closeButton.current?.focus()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.body.style.overflow = previousOverflow
            document.removeEventListener('keydown', handleKeyDown)
            previousFocus?.focus()
        }
    }, [onClose])

    // Il portale copre tutto lo schermo anche se la riga ha ombre o trasformazioni.
    return createPortal(
    <div className='film-preview-backdrop' onClick={event => {event.stopPropagation(); onClose()}}>

    {/* Anteprima senza alone bianco; i click interni non la chiudono. */}
    <div className='film-preview' onClick={event => event.stopPropagation()} role='dialog' aria-modal='true' aria-label={title} style={{display:'flex',zIndex:1000,position:'absolute', backgroundColor:'var(--eva-purple)',flexDirection:'column',alignItems:'center',height:'490px',border:'solid',borderWidth:'6px', borderRadius:'10px',justifyContent:'center',width:'530px'}}>
            <div style={{display:'flex',width:'100%',marginLeft:'25px',flexDirection:'row',justifyContent:'space-between'}}>
                <Title id={id} title={title}/>
                <button ref={closeButton} type='button' aria-label='Chiudi anteprima' onClick={onClose} style={{backgroundColor:'white',width:'69px', height:'40px',border:'solid',borderWidth:'2px',borderColor:'black',WebkitTransform:'-moz-initial',transform: 'skewX(-16deg)',margin:'20px',marginRight:'25px',fontFamily:'avenger',fontSize:'25px',justifyContent:'center',boxShadow:'3px 3px var(--interactive-shadow)'}}>
                    <div style={{transform: 'skewX(16deg)', marginTop:'2px'}}> ✖︎
                    </div>
                </button>
            </div>
            <div style={{display:'flex',backgroundColor:'green',flex:1,height:'90%',width:'90%',borderWidth:'2px',borderColor:'black',border:'solid',marginBottom:'10px'}}>
                <img style={{height:'100%',width:'100%',}} src='https://c.tenor.com/LNHAv74lhqgAAAAM/ma-io-che-ne-so-ma-io-che-ne-so-meme.gif' alt='apudodo'></img>
            </div>
    </div>
    </div>, document.body
    )
}

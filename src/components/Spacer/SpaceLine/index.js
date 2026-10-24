import React from 'react'
import Spacer from '../../Spacer'

// La variante brand è riservata alle fasce esterne; senza variante resta la linea originale.
export default function SpaceLine({size,color,borderColor = 'black',variant = 'default',animation = false,direction = 'next',animationKey = 0}) {
    const isBrand = variant === 'brand'
    // animation è opzionale: lista, anteprima e fascia inferiore restano statiche.
    const geared = animation && isBrand
    const className = [isBrand && 'space-line-brand', geared && 'space-line-geared', animation && animationKey > 0 && 'space-line-moving'].filter(Boolean).join(' ') || undefined
    const lineSize = size || (isBrand ? 'clamp(52px, 9vw, 76px)' : undefined)
    // Tre copie dello stesso giro: i denti ricompaiono dal bordo senza salti o dissolvenze.
    const renderGear = side => {
        const widths = side === 'left' ? [0.029, 0.05, 0.08, 0.15] : [0.15, 0.08, 0.05, 0.029]
        const opacities = side === 'left' ? [0.5, 0.7, 0.8, 0.9] : [0.9, 0.8, 0.7, 0.5]
        return <div className='brand-gear-window' style={{height: lineSize}} aria-hidden='true'>
            <div className='brand-gear-track'>
                {[0, 1, 2].map(turn => <div className='brand-gear-turn' key={turn}>
                    {widths.map((width, index) => <span key={index} style={{flex: width / 0.309, borderColor}}>
                        {/* L’opacità riguarda solo il bianco, non il contorno del dente. */}
                        <span className='brand-gear-fill' style={{backgroundColor: color, opacity: opacities[index]}}/>
                    </span>)}
                </div>)}
            </div>
        </div>
    }
    return (
        <div key={animation ? animationKey : 'static'} className={className} data-direction={animation ? direction : undefined} style={{display:'flex',flex:1,flexDirection:'row',alignItems:'center',marginTop:isBrand ? 0 : '10px',marginBottom:isBrand ? 0 : '10px',marginLeft:'10px'}}>
            {geared ? renderGear('left') : <>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.029} opacity='50%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.05} opacity='70%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.08} opacity='80%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.15} opacity='90%'/>
            </>}
            {/* La fascia centrale non fa parte dei rulli e resta sempre immobile. */}
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={1}/>
            {geared ? renderGear('right') : <>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.15} opacity='90%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.08} opacity='80%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.05} opacity='70%'/>
            <Spacer size={lineSize} color={color} borderColor={borderColor} flex={0.029} opacity='50%'/>
            </>}
        </div>
    )
}

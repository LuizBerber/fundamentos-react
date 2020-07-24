import React from 'react'

export default props => {
    // Usando destructuring para criar constantes
    const {min, max} = props
    const random = parseInt(Math.random() * (max - min)) + min;
    return (
        <>
            <p><strong>Min value: </strong>{min}</p>
            <p><strong>Min value: </strong>{max}</p>
            <p><strong>Final: </strong>{random}</p>
        </>
    )
}
    
    
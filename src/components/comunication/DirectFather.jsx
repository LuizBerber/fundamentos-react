import React from 'react'
import DirectSon from './DirectSon'

export default props => {
    return (
        <div>
            <DirectSon name='Felipe' age={10} idiot={true}/>
            <DirectSon name='Smith' age={9} idiot={false}/>
        </div>
    )
}
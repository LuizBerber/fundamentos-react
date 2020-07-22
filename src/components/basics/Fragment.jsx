import React from 'react'

export default function Fragment(props){
    return(
        /*
        Neste ponto, testamos o erro 'Adjacent JSX', que é resolvido com o uso de React.fragment ou <> 
        (que é outra forma de acessar a mesma priedade)

        Fazemos isso para retornar elementos sem a necessidade de envolve-los em uma div
        */
        <>
            <h2>Fragment</h2>
            <p>Beware of this error!</p>
        </>
    )
}
import React, {cloneElement} from 'react'

export default props => {

    return (
        <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}
/*
Utilizando propagação (spread) para passar todos os parâmetros para o compoente filho:
<FamilyMember name='Luiz' lastName={props.lastName}/>
<FamilyMember name='Pedro' {...props}/>
<FamilyMember name='Renan' lastName='Viana'/>

Para passar para o filho UM elemento filho recebido e propagar as propriedades:
{cloneElement(props.children, props)}
*/
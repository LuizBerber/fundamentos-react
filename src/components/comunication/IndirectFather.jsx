import React, {useState} from 'react'
import IndirectSon from './IndirectSon'

export default props => {
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [idiot, setIdiot] = useState(false)

    function provideInformation(name, age, idiot){
        setName(name)
        setAge(age)
        setIdiot(idiot)
    }

    return (
        <div>
            <div><strong>Father</strong></div>
            <span>{name}</span>
            <span> - {age} - </span>
            <span>{idiot ? 'True' : 'False'}</span>
            <IndirectSon whenClick={provideInformation}/>
        </div>
    )
}
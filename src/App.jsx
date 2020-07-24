import React from 'react'

import First from './components/basics/First'
import Second from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'

// Quando usamos o export DEFAULT, é possível usar uma função anônima (sem nome)
// export default function (props) {

export default _ =>
    <div>
        <h1>React Foundations</h1>
        <Card title='Random number'>
            <Random min={7} max={10}/>
        </Card>
        <Card title='Fragment'>
            <Fragment />
        </Card>
        <Card title='With parameter'>
        <Second question='The answer to the Ultimate Question of Life, the Universe, and Everything'
            answer={42} />
        </Card>
        <Card title='First Component'>
        <First></First>
        </Card>        
    </div>
import React from 'react'
import './App.css'

import First from './components/basics/First'
import Second from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'

// Quando usamos o export DEFAULT, é possível usar uma função anônima (sem nome)
// export default function (props) {

export default _ =>
    <div className='App'>
        <h1>React Foundations</h1>
        <div className='Cards'>
            <Card title='Random number'color='#EB7260'>
                <Random min={7} max={10}/>
            </Card>
            <Card title='Fragment' color='#29ABA4'>
                <Fragment />
            </Card>
            <Card title='With parameter' color='#3A9AD9'>
            <Second question='The answer to the Ultimate Question of Life, the Universe, and Everything'
                answer={42} />
            </Card>
            <Card title='First Component' color='#354458'>
            <First></First>
            </Card>
        </div>        
    </div>
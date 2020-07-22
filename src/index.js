import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import Second from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'

ReactDOM.render(
    <div>
        <First></First>
        <br/>
        <Second 
            question='The answer to the Ultimate Question of Life, the Universe, and Everything' 
            answer={42} />
        <Fragment/>
    </div>,
    document.getElementById('root')
)

/*
const tag = <strong>Hello React!</strong>

ReactDOM.render(
    <div>
        {tag}
    </div>, 
    document.getElementById('root')
)
*/
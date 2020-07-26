import React, { Component } from 'react'
import './Counter.css'
import Display from './Display'
import PassForm from './PassForm'
import Buttons from './Buttons'

class Counter extends Component {

    state = {
        number: this.props.initialNumber || 0,
        pass: this.props.initialPass || 5
    }

    increment = () => {
        this.setState({
            number: this.state.number + this.state.pass
        })
    }

    decrement = () => {
        this.setState({
            number: this.state.number - this.state.pass
        })
    }

    setPass = (newPass) => {
        this.setState({
            pass: newPass
        })
    }

    render(){
        return (
            <div className='Counter'>
                <h2>Counter</h2>
                <Display number={this.state.number}/>
                <PassForm pass={this.state.pass} setPass={this.setPass}/>
                <Buttons setIncrement={this.increment} setDecrement={this.decrement}/>
            </div>
        )
    }
}

export default Counter
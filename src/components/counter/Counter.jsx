import React, { Component } from 'react'
import './Counter.css'

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

    setPass = (e) => {
        this.setState({
            pass: +e.target.value
        })
    }

    render(){
        return (
            <div className='Counter'>
                <h2>Counter</h2>
                <p>{this.state.number}</p>
                <div>
                    <label htmlFor='inputPass'>Pass: </label>
                    <input id='inputPass' type='number' value={this.state.pass} onChange={this.setPass}/>
                </div>
                <button onClick={this.increment}> + </button>
                <button onClick={this.decrement}> - </button>
            </div>
        )
    }
}

export default Counter
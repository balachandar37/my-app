import { Component } from "react";

import './index.css'

class Counter extends Component {
    state = {count: 0}

    onClickDecrease = () => {
        const {count} = this.state
        if (count > 0) {
            this.setState(prevState => ({count: prevState.count - 3}))
        }
    }

    onclickIncrease = () => {
        this.setState(prevState => ({count: prevState.count + 3}))
    }

    render(){
        const {count} = this.state

        return(
            <div className="counter-bg">
                <div className="counter-card">
                <h1 className="counter-heading">Counter</h1>
                <div className="count-container">
                    <button type="button" onClick={this.onClickDecrease} className='button' >-</button>
                    <p className="count-text">{count}</p>
                    <button type="button" onClick={this.onclickIncrease} className="button" >+</button>
                </div>
            </div>
            </div>
        )
    }
}

export default Counter
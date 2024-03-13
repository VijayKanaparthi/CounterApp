import {Component} from 'react'

import './index.css'

class Counter extends Component {
state = {count:0}  
onIncrement = () => {
  this.setState(preState => {
    console.log(`current number ${preState.count}`)
    return {count: preState.count + 1}
  })
}
onDecrement = () => {
  this.setState(preNum => {
    return{count: preNum.count -1}
  })
}

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick = {this.onIncrement}>Increse</button>
          <button className="button" onClick = {this.onDecrement}>Decrese</button>
        </div>
      </div>
    )
  }
}

export default Counter

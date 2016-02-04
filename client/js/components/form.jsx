import React, {Component} from 'react'
import request from 'superagent'

class Form extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.submitCallback(this.refs.city.value)
    
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="city"></input>
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Form

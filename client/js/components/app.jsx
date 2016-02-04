import React, {Component} from 'react'
import Form from './form.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }
  submitCallback(city) {
    console.log(city)
  }
  render() {
    return (
      <Form submitCallback={this.submitCallback.bind(this)}/>
    )
  }
}

export default App

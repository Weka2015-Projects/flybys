import React, {Component} from 'react'
import Form from './form.jsx'
import FlightContainer from './flight-container.jsx'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flights: []
    }
  }
  submitCallback(flightData) {
    this.setState({
      flights: flightData
    })
  }
  render() {
    const { flights } = this.state
    return (
      <div className="container">
        <Form submitCallback={this.submitCallback.bind(this)}/>
        <FlightContainer flights={flights}/>
      </div>
    )
  }
}

export default App

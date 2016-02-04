import React, {Component} from 'react'

class Flight extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { airline, departure, returnDate, price, destination} = this.props
    return(
      <div className="flight col-md-12">
        <h3>{destination}</h3>
        <h5>{price}</h5>
        <p>Departure: {departure}</p>
        <p>Return: {returnDate}</p>
        <p>Airline: {airline}</p>
      </div>
    )
  }
}

export default Flight

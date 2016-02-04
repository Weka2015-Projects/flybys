import React, {Component} from 'react'
import Flight from './flight.jsx'

class FlightContainer extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const { flights } = this.props
    const flightArray = []
    flights.map((flight, index) => {
      flightArray.push(<Flight key={index} airline={flight.airline} departure={flight.departure_date} destination={flight.destination} price={flight.price} returnDate={flight.return_date}/>)
    })
    return(
      <div className="flights row">
        {flightArray}
      </div>
    )
  }
}

export default FlightContainer

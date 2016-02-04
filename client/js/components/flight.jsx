import React, {Component} from 'react'

class Flight extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { airline, departure, returnDate, price, destination} = this.props
    return(
      <div className="flight col-md-12">
      <table className="table table-hover table table-striped">
      <tr>
      <th>Destination</th>
      <th>Price</th>
      <th>Date Departing</th>
      <th>Returning</th>
      <th>Airline</th>
      </tr>
      <tbody>
      <tr>
        <td>{destination}</td>
        <td>{price}</td>
        <td>{departure}</td>
        <td>{returnDate}</td>
        <td>{airline}</td>
      </tr>
      </tbody>
        </table>
      </div>
    )
  }
}

export default Flight

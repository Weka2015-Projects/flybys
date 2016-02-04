import React, {Component} from 'react'
import request from 'superagent'
import moment from 'moment'

class Form extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    request.get("https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=Jl3AX6FJxrsT33cqi0SkZPzChIlOdXsF&origin=" + this.refs.city.value + "&departure_date=" + moment().format('YYYY-MM-DD') + "&max_price=" + this.refs.price.value)
    .end((err, res) => {
      if(err) {
        console.log(err)
      } else {
        this.props.submitCallback(res.body.results)
      }
    })
  }
  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit.bind(this)}>
      <div className="form-group">
        <label className="control-label">Your Location:</label>
        <input type="text" ref="city" className="form-control" id="origincity"></input>
        <label className="control-label">Maximum Price:</label>
        <input type="number" ref="price" className="form-control" id="amounttospend"></input>
        <button type="submit" className="btn btn-default">Search</button>
                </div>
      </form>
    )
  }
}

export default Form

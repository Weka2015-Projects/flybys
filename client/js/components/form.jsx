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
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="city"></input>
        <input type="number" ref="price"></input>
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Form

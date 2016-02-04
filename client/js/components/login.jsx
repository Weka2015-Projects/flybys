import React, {Component} from 'react'
import request from 'superagent'

class Login extends Component {
  constructor(props) {
    super(props)
  }
  login(e){
    e.preventDefault()
    request.post('/login')
          .send({
            email: this.refs.email.value,
            password: this.refs.password.value
            })
  }
  render() {
    return(
      <div className="form-wrapper">
        <form onSubmit={this.login.bind(this)}>
          <label>Email:</label>
          <input ref="email" type="email"></input>
          <label>Password:</label>
          <input ref="password" type="password"></input>
          <button type="submit">
            Login
          </button>
        </form>
      </div>

    )
  }
}

export default Login

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
        email: this.refs.emailLogin.value,
        password: this.refs.passwordLogin.value
      }).end((err, res) => {
        if (err) {

        } else {

        }
      })
  }
  signUp(e){
    e.preventDefault()
    request.post('/signup')
    .send({
      email: this.refs.emailSignup.value,
      password: this.refs.passwordSignup.value
    }).end((err, res) => {
      if (err) {

      } else {

      }
    })
  }
  render() {
    return(
      <div className="form-wrapper">
        <form onSubmit={this.login.bind(this)}>
          <h3>Sign in</h3>
          <label>Email:</label>
          <input ref="emailLogin" type="email"></input>
          <label>Password:</label>
          <input ref="passwordLogin" type="password"></input>
          <button type="submit">
            Login
          </button>
        </form>
        <form onSubmit={this.signUp.bind(this)}>
          <h3>No account? Sign up</h3>
          <label>Email:</label>
          <input ref="emailSignup" type="email"></input>
          <label>Password:</label>
          <input ref="passwordSignup" type="password"></input>
          <button type="submit">
            Login
          </button>
        </form>
      </div>

    )
  }
}

export default Login

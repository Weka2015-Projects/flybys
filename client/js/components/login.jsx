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
        username: this.refs.emailLogin.value,
        password: this.refs.passwordLogin.value
      }).end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
          window.location.href = "/#/user-profile"
          }
      })
  }
  signUp(e){
    e.preventDefault()
    request.post('/users')
    .send({
      username: this.refs.emailSignup.value,
      password: this.refs.passwordSignup.value
    }).end((err, res) => {
      if (err) {

      } else {
        this.refs.emailSignup.value = ''
        this.refs.passwordSignup.value = ''
      }
    })
  }
  render() {
    return(
      <div className="form-wrapper">
        <form onSubmit={this.login.bind(this)}>
          <h3>Sign in</h3>
          <label>Email:</label>
          <input ref="emailLogin" type="text" className="form-control"></input>
          <label>Password:</label>
          <input ref="passwordLogin" type="password" className="form-control"></input>
          <button type="submit" className="btn btn-success">
            On log
          </button>
        </form>
        <form onSubmit={this.signUp.bind(this)} autoComplete="off">
          <h3>No account? Sign up</h3>
          <label>Email:</label>
          <input ref="emailSignup" type="text" className="form-control"></input>
          <label>Password:</label>
          <input ref="passwordSignup" type="password" className="form-control"></input>
          <button type="submit" className="btn btn-success">
            Sign down
          </button>
        </form>
      </div>

    )
  }
}

export default Login

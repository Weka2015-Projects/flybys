import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'
import Login from './components/login.jsx'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
<Router>
  <Route path="/" component={Main}>
    <IndexRoute component={Login} />
    <Route path="user-profile" component={App} />
  </Route>
</Router>
, document.getElementById('app'))

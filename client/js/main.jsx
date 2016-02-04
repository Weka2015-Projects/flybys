import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <App/>
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('app'))

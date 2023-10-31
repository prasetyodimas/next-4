import React from 'react'
import Navbar from '../components/navbar'
import Login from '../components/login'
import 'bootstrap/dist/css/bootstrap.css'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <Login/>
        {/* Hello World {this.props.userAgent} */}
      </div>
    )
  }
}

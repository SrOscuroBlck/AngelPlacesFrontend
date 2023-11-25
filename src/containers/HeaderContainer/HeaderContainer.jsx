import React from 'react'
import Header from '../../components/Header/Header'



class HeaderContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        username: 'Guest'
        }
    }
  render() {
    const { username } = this.state
    return <Header username={username} />
  }
}

export default HeaderContainer
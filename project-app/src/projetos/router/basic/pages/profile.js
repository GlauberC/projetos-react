import React, {Component} from 'react'

export default class Profile extends Component {
    state = {
        profile: -1
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.setState({profile: id})
    }

    render(){
        return (
            <div>
                <h1>Profile</h1>
                <h2>Número: {this.state.profile}</h2>
            </div>
        )
    }
}
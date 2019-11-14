import React from 'react'
import Inputs from './Inputs'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            number: 0,
            validThru: ''

        }
    }




    render() {
        var regex = /^\d{2}$/;


        return (
            <div>
                <Inputs number={this.state.number} name={this.state.name} validThru={this.state.validThru} />
                
                <input type='text' maxLength='5' onChange={(content) => this.setState({number: content.target.value})} />
                <input type='text' maxLength='20' onChange={(content) => this.setState({name: content.target.value.toUpperCase() })  } />
                <input type='text' maxLength='5' onChange={(content) => this.setState({validThru: (regex.test(content.target.value)) ? content.target.value += '/' : content.target.value })} />
            </div>
        )
    }
}

export default Header
import { Component } from "react";


class LedButton extends Component{

    state = {isLedOn: false}

    toggleLedText = () => {
        this.setState((prevState) => {
            return {isLedOn: !prevState.isLedOn}
        })
    }

    render(){
        const buttonText = this.state.isLedOn ? 'TURN LED OFF': 'TURN LED ON'
        return <button className='button-element' onClick={this.toggleLedText}>{buttonText}</button>
    }
}



export default LedButton
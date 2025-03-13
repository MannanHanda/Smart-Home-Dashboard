import { Component } from "react";
import axios from "axios";

class LedButton extends Component {

    state = {isLedOn: false}
    raspberryPiIP = "http://192.168.1.153:5000"

    toggleLedText = async () => {
        const newState = this.state.isLedOn ? "off" : "on";
        try {
            await axios.post(`${this.raspberryPiIP}/toggle-led`, { state: newState });
            this.setState((prevState) => {
                return {isLedOn: !prevState.isLedOn}
            });
        } catch (error) {
            console.error("Error toggling LED", error);
        }
    }

    render(){
        const buttonText = this.state.isLedOn ? 'LED OFF': 'LED ON'
        return <button className='button-element' onClick={this.toggleLedText}>{buttonText}</button>
    }
}

export default LedButton;

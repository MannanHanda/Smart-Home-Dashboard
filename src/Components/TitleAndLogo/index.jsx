// Imports
import { Component } from 'react'
import './index.css'

class TitleAndLogo extends Component{
    render(){

        
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 flexbox-center-row padding-y'><i className="fa-solid fa-house fa-8x icon"></i></div>
                    <div className='col-12 flexbox-center-row padding-y'><h1>DASHBOARD</h1></div>
                </div>
            </div>
        )
    }
}

export default TitleAndLogo
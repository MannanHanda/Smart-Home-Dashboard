const HumidityButton = (props) => {
    return(<button className='button-element' onClick={props.onClick}>{props.title}</button>)
}
export default HumidityButton
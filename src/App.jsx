// Imports
import './App.css'
import TitleAndLogo from './Components/TitleAndLogo'
import ButtonsContainer from './Components/ButtonsContainer'

const App = () =>{

  const className1 = 'col-lg-4 col-md-4 flexbox-center-row column-1 border-seperator'
  const className2 = 'col-lg-8 col-md-8 flexbox-center-row column-2'

  return(
    <div className='container-fluid main-container'>
        <div className='row main-row'>
          <div className={className1}><TitleAndLogo/></div>
          <div className={className2}><ButtonsContainer/></div>
        </div>
    </div>
  )

}

export default App

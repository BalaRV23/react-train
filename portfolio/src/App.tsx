import './App.css'
import About from './components/About'
import Contacts from './components/Contacts'
import Details from './components/Details'

function App() {
  return (
      <div className='container'>
      <Contacts/>
      <About/>
      <Details />
      </div>
  )
}
export default App
import './App.css'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import Persona from './components/Persona'
import { PersonaProvider } from './context/persona'

function App() {
  return (
    <div className='page'>
      <Appbar />
      <h1>Hola React!</h1>
      <PersonaProvider>
        <Persona />
        <Footer />
      </PersonaProvider>


    </div>
  )

}

export default App

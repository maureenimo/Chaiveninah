import { Navbar, Contact, Footer } from './components';
import { Home, Order, Gallery, Specials } from './pages';
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Specials/>
      <Gallery/>
      <Order/>
      <Contact/>
      <Footer/>
    </div>
  )
  
}

export default App

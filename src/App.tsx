import './App.css'
import Header from './components/Header/Header'
import Action from './section/Action/Action'
import Check from './section/Check/Check'
import Guarantee from './section/Guarantee/Guarantee'
import Hero from './section/Hero/Hero'
import Mission from './section/Mission/Mission'
import Plus from './section/Plus/Plus'
import Risk from './section/Risk/Risk'
import Services from './section/Services/Services'
import Support from './section/Support/Support'
import WhyUs from './section/WhyUs/WhyUs'

function App() {

  return (
    <main className='container'>
      <Header />
      <Hero />
      <Plus />
      <Support />
      <Mission />
      <Services />
      <Check />
      <Risk />
      <WhyUs />
      <Guarantee />
      
      <Action />
    </main>
  )
}

export default App

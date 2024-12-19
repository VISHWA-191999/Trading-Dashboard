

import './App.css'
import Content from './components/Content'
import CryptoPrices from './components/CryptoPrices'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
    <>
      
    <div className='flex'>
      {/* Sidebar */}
     <Sidebar/>

     {/* Main Content */}
     <div className='bg-gray-950 text-white w-full'>
      <Header/>
      <Content/>
      <CryptoPrices/>
     </div>
    </div>
    </>
  )
}

export default App

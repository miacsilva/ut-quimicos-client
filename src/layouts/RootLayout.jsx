
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { ScrollRestoration } from 'react-router-dom'






// Navbar and Footer

function RootLayout() {
  return (
    <div className="root-layout">
           



             <Navbar/>
        
        <main>
            <Outlet/>
        </main>


            <Footer/>



            <ScrollRestoration/> {/* Assuring the page goes up when changing routes */}



    </div>
  )
}

export default RootLayout
import { Outlet } from 'react-router-dom'
// import Topbar from './utilities/topbar/Topbar'
import Footer from './utilities/footer/Footer'

function Layout() {
  return (
    <>
      
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
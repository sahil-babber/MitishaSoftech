import { Outlet } from 'react-router-dom'
// import Topbar from './utilities/topbar/Topbar'
import Footer from './utilities/footer/Footer'
import ScrollToTopButton from './components/scrolltotop/ScrollToTop'

function Layout() {
  return (
    <>
      
      <Outlet/>
      <Footer/>
      <ScrollToTopButton/>
    </>
  )
}

export default Layout
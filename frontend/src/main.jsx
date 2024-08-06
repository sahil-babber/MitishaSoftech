import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Team from './components/team/Team.jsx';
import SCrollToTop from './utilities/ScrollToTo.jsx';
import TeamDetails from './components/team/TeamDetails.jsx';
import Career from './components/career/Career.jsx';
import Contact from './components/contact/Contact.jsx';
import Pricing from './components/pricing/Pricing.jsx';
import Faq from './components/faq/Faq.jsx';
import Service from './components/service/Service.jsx';
import SingleService from './components/service/singleservice/SingleService.jsx';
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy.jsx';
import Terms from './components/tems/Terms.jsx';
import Sitemap from './components/sitemap/Sitemap.jsx';
import Solutions from './components/solutions/Solutions.jsx';
import Verify from './components/verify/Verify.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <SCrollToTop />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="team" element={<Team/>} />
          <Route path="/team/:id" element={<TeamDetails />} />
          <Route path="career" element={<Career/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="pricing" element={<Pricing/>} />
          <Route path="faq" element={<Faq/>} />
          <Route path="services" element={<Service/>} />
          <Route path="/services/:id" element={<SingleService/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/terms&conditions" element={<Terms/>} />
          <Route path="/sitemap" element={<Sitemap/>} />
          <Route path="/solutions" element={<Solutions/>} />
          <Route path="/verify" element={<Verify/>} />
        </Route>
      </Routes>
    </Router>
    <ToastContainer />
  </React.StrictMode>,
)

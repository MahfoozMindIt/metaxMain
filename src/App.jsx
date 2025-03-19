import { lazy, Suspense } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Loader from './components/Loader';
import Layout from './Layout'
import ScrollToTop from './components/Scroll';

const Home=lazy(()=>import('./pages/Home'));
const Contact=lazy(()=>import('./pages/Contact'));
const About=lazy(()=>import('./pages/About'));
const Business=lazy(()=>import('./pages/Business'));
const Personal=lazy(()=>import('./pages/Personal'));


function App() {

  return (
    <Router>
      <ScrollToTop>
      <Suspense fallback={<Loader/>}/>
        <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/personal" element={<Personal />} />
        </Route>
      </Routes></ScrollToTop>
    </Router>
  )
}

export default App;

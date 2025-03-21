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
const AED=lazy(()=>import('./pages/AED'));
const Personal=lazy(()=>import('./pages/Personal'));
const SepaAccount=lazy(()=>import('./pages/SepaAccount'));
const UkFasterPayment=lazy(()=>import('./pages/UkFasterPayment'));
const UsdPayment=lazy(()=>import('./pages/UsdPayment'));
const BulkPayment=lazy(()=>import('./pages/BulkPayment'));
const ApplePay=lazy(()=>import('./pages/ApplePay'));
const MobileApp=lazy(()=>import('./pages/MobileApp'));
const MetaxCards=lazy(()=>import('./pages/MetaxCards'));
const Ecommerce=lazy(()=>import('./pages/Ecommerce'));


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
        <Route path="/aed-account" element={<AED />} />
        <Route path="/sepa-account" element={<SepaAccount />} />
        <Route path="/gbp-account" element={<UkFasterPayment />} />
        <Route path="/usd-payment-account" element={<UsdPayment />} />
        <Route path="/bulk-payment" element={<BulkPayment />} />
        <Route path="/apple-pay" element={<ApplePay />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/cards" element={<MetaxCards />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        </Route>
      </Routes></ScrollToTop>
    </Router>
  )
}

export default App;

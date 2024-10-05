import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Blogs from './components/Blogs';
import CommonFooter from './components/CommonFooter';
import CommonHeader from './components/CommonHeader';
import ContactForm from './components/ContactForm';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import PricingComponent from './components/PricingComponent';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <CommonHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/PricingComponent" element={<PricingComponent />} />
            <Route path="/ContactForm" element={<ContactForm />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <CommonFooter />
      </div>
    </Router>
  );
}

export default App;

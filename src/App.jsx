import { useState } from 'react';
import Navbar from './components/navbar';
import LandingPage from './pages/landingPage';
import AboutPage from './pages/about';
import OverviewPage from './pages/overview';
import Footer from './components/footer';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <main>
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'overview' && <OverviewPage />}
      </main> 

      <Footer/>
    </div>
  );
}

export default App;
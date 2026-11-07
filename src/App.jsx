import { useState } from 'react';
import Navbar from './components/navbar';
import LandingPage from './pages/landingPage';
import AboutPage from './pages/about';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* 2. Panggil komponen Navbar di sini */}
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {/* 3. Tampilkan isi halaman */}
      <main>
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'about' && <AboutPage />}
      </main> 
    </div>
  );
}

export default App;
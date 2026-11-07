import { useState } from 'react';
// 1. Import komponen yang sudah kamu buat
import Navbar from './components/navbar';
import LandingPage from './pages/landingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* 2. Panggil komponen Navbar di sini */}
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {/* 3. Tampilkan isi halaman */}
      <main>
        {currentPage === 'landing' && <LandingPage />}
        {/* Nanti kalau AboutPage sudah dibuat: {currentPage === 'about' && <AboutPage />} */}
      </main>
    </div>
  );
}

export default App;
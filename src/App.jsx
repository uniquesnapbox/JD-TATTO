import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingCall from './components/FloatingCall';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const modalProps = useMemo(() => ({ isOpen: isModalOpen, onClose: closeModal }), [isModalOpen]);

  return (
    <div className="min-h-screen bg-ink text-white flex flex-col">
      <Header onBook={openModal} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onBook={openModal} />} />
          <Route path="/about" element={<About onBook={openModal} />} />
          <Route path="/services" element={<Services onBook={openModal} />} />
          <Route path="/gallery" element={<Gallery onBook={openModal} />} />
          <Route path="/contact" element={<Contact onBook={openModal} />} />
        </Routes>
      </main>

      <Footer />
      <FloatingCall />
      <BookingModal {...modalProps} />
    </div>
  );
}

export default App;

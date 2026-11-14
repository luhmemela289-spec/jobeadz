import { useState } from 'react';
import { AboutAndValues } from './components/AboutAndValues';
import { CollectionSection } from './components/CollectionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState('');

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF6F0] text-[#2A1A14]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CollectionSection
          onSelectProductForEnquiry={(name) => setSelectedProductForEnquiry(name)}
        />
        <AboutAndValues />
        <GallerySection />
        <ContactSection selectedProductName={selectedProductForEnquiry} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

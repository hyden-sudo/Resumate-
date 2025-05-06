
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ResumeUploader from '@/components/ResumeUploader';
import AnalysisResults from '@/components/AnalysisResults';
import AiChat from '@/components/AiChat';
import Footer from '@/components/Footer';

const Index = () => {
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [showResults, setShowResults] = useState<boolean>(false);
  
  const handleAnalysisComplete = (results: any) => {
    setAnalysisResults(results);
    setShowResults(true);
    
    // Scroll to results after a short delay
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ResumeUploader onAnalysisComplete={handleAnalysisComplete} />
      <div id="results">
        <AnalysisResults results={analysisResults} isVisible={showResults} />
        <AiChat resumeResults={analysisResults} isVisible={showResults} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

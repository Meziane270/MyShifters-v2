import React from "react";
import "@/App.css";
import "@/styles/modern.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import ModernHeader from "@/components/ModernHeader";
import ModernHero from "@/components/ModernHero";
import ModernServices from "@/components/ModernServices";
import PMSSection from "@/components/PMSSection";
import ModernAdvantages from "@/components/ModernAdvantages";
import ModernTestimonials from "@/components/ModernTestimonials";
import ModernFooter from "@/components/ModernFooter";

const Home = () => {
  return (
    <div>
      <ModernHeader />
      <ModernHero />
      <ModernServices />
      <PMSSection />
      <ModernAdvantages />
      <ModernTestimonials />
      <ModernFooter />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

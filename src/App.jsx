import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import "./index.css";

import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import { AnimatePresence } from 'framer-motion';

// Lazy load pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Portofolio = lazy(() => import("./Pages/Portofolio"));
const ContactPage = lazy(() => import("./Pages/Contact"));
const ProjectDetails = lazy(() => import("./components/ProjectDetail"));
// ❌ Removed WelcomeScreen

const LandingPage = () => {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="text-white text-center mt-10">Loading...</div>}>
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2025{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  VIPER IT
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      </Suspense>
    </AnimatePresence>
  );
};

const ProjectPageLayout = () => (
  <Suspense fallback={<div className="text-white text-center mt-10">Loading Project...</div>}>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            EkiZRIT
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </Suspense>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { AuthProvider, ProtectedRoute } from "@/auth";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import PracticeHub from "@/pages/PracticeHub";
import PracticeAreaPage from "@/pages/PracticeAreaPage";
import Courts from "@/pages/Courts";
import LocationPage from "@/pages/LocationPage";
import Insights from "@/pages/Insights";
import ArticlePage from "@/pages/ArticlePage";
import Contact from "@/pages/Contact";
import Legal from "@/pages/Legal";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import NotFound from "@/pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
};

function App() {
  useLenis();
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="top-center" richColors />
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about-aditya-gaur" element={<About />} />
                  <Route path="/practice-areas" element={<PracticeHub />} />
                  <Route path="/courts-jurisdiction" element={<Courts />} />
                  <Route path="/legal-insights" element={<Insights />} />
                  <Route path="/legal-insights/:slug" element={<ArticlePage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/disclaimer" element={<Legal page="disclaimer" />} />
                  <Route path="/privacy-policy" element={<Legal page="privacy" />} />
                  <Route path="/terms-of-use" element={<Legal page="terms" />} />
                  <Route path="/:slug" element={<PracticeOrLocation />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

import { useParams } from "react-router-dom";
import { getPracticePage } from "@/data/practiceAreas";
import { getLocationPage } from "@/data/locations";

const PracticeOrLocation = () => {
  const { slug } = useParams();
  if (getPracticePage(slug)) return <PracticeAreaPage slug={slug} />;
  if (getLocationPage(slug)) return <LocationPage slug={slug} />;
  return <NotFound />;
};

export default App;

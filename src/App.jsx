import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./pages/Home";
import About from "./pages/About";
// import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import ShippingReturns from "./pages/ShippingReturns";
import StorePolicy from "./pages/StorePolicy";
import PaymentMethods from "./pages/PaymentMethods";
import FAQ from "./pages/FAQ";
import { NewArrivals, TailoringServices, SizeGuide, Lookbook } from "./pages/info";

// This component handles scroll restoration
export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          
          {/* Customer Service Pages */}
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/store-policy" element={<StorePolicy />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Info Pages */}
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/tailoring-services" element={<TailoringServices />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/lookbook" element={<Lookbook />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

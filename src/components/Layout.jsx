import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

// Component import
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <div>
        <Navbar theme={theme} setTheme={setTheme} />
        {children}
        <Footer />
      </div>
      <div className="fixed top-[50%] -translate-y-[50%] right-2 space-y-5">
        {/* WhatsApp Button */}
        <div className="w-[60px] h-[60px] right-2  cursor-pointer bg-[#25D366] rounded-full flex items-center justify-center">
          <a href="https://wa.me/6266302210">
            <FaWhatsapp className="text-2xl text-white dark:text-black" />
          </a>
        </div>
        {/* Phone Call Button */}
        <div className="w-[60px] h-[60px] cursor-pointer top-[50%] bg-[#0C93CB] rounded-full flex items-center justify-center">
          <a href="tel:+16266302210">
            <FiPhone className="text-2xl text-white dark:text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;

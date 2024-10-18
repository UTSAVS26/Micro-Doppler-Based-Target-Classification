import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#022742] text-white px-4 py-4 flex items-center justify-center">
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} Micro-Doppler Based Target Classification. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t mt-12">
      <div className="container text-center">© {new Date().getFullYear()} Kuldeep</div>
    </footer>
  );
};

export default Footer;

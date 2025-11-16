'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from './Nav';

const Header = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary/95 backdrop-blur-sm shadow-sm z-40">
      <div className="container mx-auto container-padding">
        <div className="flex justify-between items-center py-4">
          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-white">
            PRAMIRA
            <span className="text-accent">.</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Nav />
            <Button 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Hire me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Nav />
          </div>
        </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

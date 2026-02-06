
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Career' },
    { id: 'services', label: 'Services' },
    { id: 'strengths', label: 'Strengths' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-futuristic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer" onClick={() => scrollTo('home')}>
          DAIN.AI
        </div>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                activeSection === link.id ? 'text-cyan-400' : 'text-slate-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('strengths')}
          className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 text-sm font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
        >
          Consult Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

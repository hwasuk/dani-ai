
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-bold font-futuristic tracking-tighter text-white mb-2">
              DAIN.AI
            </div>
            <p className="text-slate-500 text-sm">
              AI Education & Transformation Consultant
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Blog</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">YouTube</a>
            <a href="mailto:hello@dain.ai" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Dain AI Transformation. All rights reserved.
          <br />
          Built with passion for the future of intelligence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

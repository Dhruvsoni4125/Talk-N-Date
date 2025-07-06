import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Talk & Date
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors duration-200">
              Features
            </a>
            <a href="#stories" className="text-foreground hover:text-primary transition-colors duration-200">
              Success Stories
            </a>
            <a href="#safety" className="text-foreground hover:text-primary transition-colors duration-200">
              Safety
            </a>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span className="text-sm">46 Languages</span>
            </div>
          </nav>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">
              Sign In
            </Button>
            <Button variant="cta">
              Join Free
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-1">
                Features
              </a>
              <a href="#stories" className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-1">
                Success Stories
              </a>
              <a href="#safety" className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-1">
                Safety
              </a>
              <div className="flex items-center space-x-1 text-muted-foreground px-2 py-1">
                <Globe className="w-4 h-4" />
                <span className="text-sm">46 Languages Available</span>
              </div>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button variant="cta" className="justify-start">
                  Join Free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
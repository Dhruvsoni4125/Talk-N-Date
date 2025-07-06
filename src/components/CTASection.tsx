import { Button } from '@/components/ui/button';
import { Heart, Shield, Users } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Find Your 
          <span className="block text-accent">Perfect Match?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join millions of verified users worldwide. Your journey to meaningful 
          connections starts with a single click.
        </p>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">100% Verified</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Global Community</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Real Connections</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="glass" size="lg" className="text-lg px-12 py-4 text-white hover:bg-white hover:text-primary">
            Start Your Journey
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-12 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary">
            Learn More
          </Button>
        </div>
        
        <div className="mt-8 text-white/80 text-sm">
          🔒 Your privacy is protected • ✅ Free to join • 🌍 Available worldwide
        </div>
      </div>
    </section>
  );
};

export default CTASection;
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-diverse-group.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Diverse group of happy people connecting globally"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Talk & Date
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light opacity-90">
          Real People. Real Connections.
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
          Connect with authentic people from around the world. Verified profiles, 
          secure chats, and meaningful relationships await you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="glass" size="lg" className="text-lg px-8 py-4">
            Join Now
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
            Find a Match
          </Button>
        </div>
        
        <div className="mt-8 text-sm opacity-70">
          Available in 46 languages • 100+ countries • Millions of verified users
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
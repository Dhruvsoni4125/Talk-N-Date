import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import womanImage from '@/assets/woman-phone-dating.jpg';
import manImage from '@/assets/man-profile-smile.jpg';

const PeopleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: womanImage,
      name: "Sarah, 28",
      location: "London, UK",
      quote: "Found my perfect match through Talk & Day's secure platform. The live photo verification gave me confidence in every conversation."
    },
    {
      image: manImage,
      name: "Miguel, 32", 
      location: "Barcelona, Spain",
      quote: "As someone who values authenticity, the strict verification process here made all the difference. Real connections with real people."
    },
    {
      image: womanImage,
      name: "Priya, 26",
      location: "Mumbai, India", 
      quote: "The multilingual support helped me connect across cultures. I love how safe and welcoming this community feels."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Stories, Real People
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join millions of verified users who found love and meaningful connections 
            through our secure, international dating platform.
          </p>
        </div>
        
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl shadow-elegant">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <img 
                        src={slide.image}
                        alt={slide.name}
                        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-card"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic">
                        "{slide.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-lg text-primary">
                          {slide.name}
                        </div>
                        <div className="text-muted-foreground">
                          {slide.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-card"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"  
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-card"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary shadow-glow' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleCarousel;
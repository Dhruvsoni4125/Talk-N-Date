import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import PeopleCarousel from '@/components/PeopleCarousel';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="features">
          <WhyChooseUs />
        </div>
        <div id="stories">
          <PeopleCarousel />
        </div>
        <div id="safety">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

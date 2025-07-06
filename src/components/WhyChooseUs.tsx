import { CheckCircle, Shield, Camera, Users, Heart, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "End-to-end encryption, verified profiles, and robust privacy protection keep you safe while connecting."
    },
    {
      icon: Camera,
      title: "Live Photo Verification",
      description: "Only real-time camera photos accepted during registration. No fake profiles, no gallery uploads."
    },
    {
      icon: Users,
      title: "Global Community", 
      description: "Connect with authentic people from 100+ countries. Cultural diversity meets genuine relationships."
    },
    {
      icon: CheckCircle,
      title: "Identity Verification",
      description: "Optional facial recognition and multi-step verification ensure you're talking to real people."
    },
    {
      icon: Heart,
      title: "Meaningful Connections",
      description: "Quality over quantity. Our platform is designed for serious relationships and lasting connections."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate in your preferred language with support for 46 languages and cultural preferences."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Talk & Day?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another dating platform. We're your trusted partner in finding 
            genuine connections with verified, authentic people worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50 hover:border-primary/20"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
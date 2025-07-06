import { Heart, Shield, Globe, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Talk & Date</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              The world's most trusted international dating platform. 
              Connecting authentic people across 100+ countries with 
              verified profiles and secure communication.
            </p>
            <div className="flex items-center space-x-4 text-white/60">
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span className="text-sm">46 Languages</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span className="text-sm">100% Verified</span>
              </div>
            </div>
          </div>
          
          {/* Features Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">Live Photo Verification</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Secure Messaging</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Global Matching</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Identity Verification</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Multilingual Support</a></li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">Safety Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 text-white/80">
              <Mail className="w-5 h-5 text-primary" />
              <span>support@talkandday.com</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80">
              <Phone className="w-5 h-5 text-primary" />
              <span>24/7 Global Support</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-white/60">
          <p className="text-sm mb-4 sm:mb-0">
            © 2024 Talk & Date. All rights reserved. Connecting hearts worldwide.
          </p>
          <div className="flex space-x-6 text-sm">
            <span>GDPR Compliant</span>
            <span>SSL Secured</span>
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
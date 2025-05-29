import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './App.css';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1565932887479-b18108f07ffd" 
          alt="Mystical Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-slate-900/80"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Spiritual
            </span>
            <br />
            <span className="text-white">Guidance</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Transform your destiny through ancient wisdom and spiritual connection. 
          <span className="text-purple-300 font-semibold"> Your wishes can become reality.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105">
            <span className="relative z-10">Begin Your Journey</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          
          <div className="text-purple-200 text-center sm:text-left">
            <p className="text-sm font-medium">10 Years of Spiritual Practice</p>
            <p className="text-xs opacity-75">Confidential & Transformative</p>
          </div>
        </motion.div>
      </div>

      {/* Mystical Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <AnimatedSection className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                A Decade of 
                <span className="block text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                  Spiritual Wisdom
                </span>
              </h2>
              
              <div className="space-y-6 text-purple-100 text-lg leading-relaxed">
                <p>
                  For ten years, I have walked the sacred path as a spiritual guide, 
                  helping souls reconnect with their divine purpose and manifest their deepest desires.
                </p>
                
                <p>
                  Drawing from ancient traditions and mystical practices, I serve as a bridge 
                  between the earthly and spiritual realms. My work is rooted in the belief that 
                  <span className="text-purple-300 font-semibold"> every wish holds the seed of possibility</span>.
                </p>
                
                <p>
                  Through personalized online sessions, I offer guidance that transcends the ordinary, 
                  helping you unlock the spiritual forces that can transform your reality.
                </p>
              </div>

              <motion.div 
                variants={fadeInUp}
                className="mt-10 p-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl border border-purple-500/30"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Sacred Promise</h3>
                <p className="text-purple-100">
                  Your journey remains completely confidential. What we share in sacred space 
                  stays between us, protected by the ancient bonds of spiritual trust.
                </p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div variants={fadeInUp} className="order-1 lg:order-2 relative">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7533332/pexels-photo-7533332.jpeg" 
                  alt="Spiritual Meditation" 
                  className="w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-80 blur-sm"
                ></motion.div>
                
                <motion.div
                  animate={{ 
                    rotate: -360,
                    y: [-10, 10, -10]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60 blur-sm"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      title: "Spiritual Guidance Session",
      description: "Deep spiritual consultation to uncover your path and receive divine guidance for life's challenges.",
      features: ["Personal spiritual reading", "Divine message channeling", "Chakra alignment guidance", "Protection rituals"],
      image: "https://images.unsplash.com/photo-1572679480927-43f955fe09c5",
      price: "Individual Session Pricing"
    },
    {
      title: "Wish Manifestation",
      description: "Sacred rituals and spiritual work to help manifest your deepest desires into reality.",
      features: ["Manifestation rituals", "Energy clearing", "Intention amplification", "Spiritual abundance work"],
      image: "https://images.unsplash.com/photo-1631879742133-a0dd6180abf9",
      price: "Additional Specialized Service"
    },
    {
      title: "Energy Healing",
      description: "Cleanse and balance your spiritual energy to remove blockages and invite positive transformation.",
      features: ["Aura cleansing", "Negative energy removal", "Spiritual protection", "Energy harmonization"],
      image: "https://images.unsplash.com/photo-1546608135-e5de34abc308",
      price: "Additional Specialized Service"
    }
  ];

  return (
    <AnimatedSection className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sacred 
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Choose your path to spiritual transformation. Each service is designed to unlock 
            different aspects of your spiritual potential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105"
            >
              {/* Service Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-purple-100 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-purple-200">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-80"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <p className="text-purple-300 font-semibold mb-4">{service.price}</p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
                  Learn More
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Process Section Component
const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Connection",
      description: "Reach out through our secure contact form. Share your spiritual needs and intentions.",
      icon: "🌟"
    },
    {
      number: "02", 
      title: "Sacred Preparation",
      description: "I prepare the spiritual space and connect with divine energies to receive your guidance.",
      icon: "🕯️"
    },
    {
      number: "03",
      title: "Online Session",
      description: "Join our private online session where divine messages and guidance will be revealed.",
      icon: "💫"
    },
    {
      number: "04",
      title: "Spiritual Integration",
      description: "Receive personalized spiritual practices and guidance to integrate your reading into daily life.",
      icon: "✨"
    }
  ];

  return (
    <AnimatedSection className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Sacred
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Journey
            </span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Every spiritual journey follows a sacred path. Here's how we'll work together 
            to unlock your spiritual potential.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative text-center group"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent z-0"></div>
                )}

                {/* Step Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-3xl shadow-lg shadow-purple-500/50"
                  >
                    {step.icon}
                  </motion.div>

                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 group-hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/20">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{step.number}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-purple-100 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <AnimatedSection className="relative py-24 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1569852178898-9605dfd85b4a" 
          alt="Crystal Ball" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-purple-900/80 to-slate-800/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Begin Your
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                Transformation
              </span>
            </h2>
            <p className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Ready to unlock the spiritual forces that can transform your reality? 
              I'm here to guide you on this sacred journey.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Sacred Contact</h3>
              
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-slate-700/50 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full bg-slate-700/50 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <textarea 
                    rows="4" 
                    placeholder="Share your spiritual intentions and what guidance you seek..."
                    className="w-full bg-slate-700/50 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
                >
                  Send Sacred Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Weekly Availability</h3>
                <p className="text-purple-100">Sessions available once per week</p>
                <p className="text-sm text-purple-300">Allowing sacred time for preparation between readings</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Online Sessions Only</h3>
                <p className="text-purple-100">Private, secure spiritual consultations</p>
                <p className="text-sm text-purple-300">Connect from the comfort of your sacred space</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <span className="text-2xl">🤫</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Complete Confidentiality</h3>
                <p className="text-purple-100">Your spiritual journey remains sacred and private</p>
                <p className="text-sm text-purple-300">Protected by ancient bonds of spiritual trust</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Main App Component
function App() {
  return (
    <div className="App relative">
      {/* Cursor Trail Effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
      </div>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-500/30 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
              Spiritual Guidance
            </h3>
            <p className="text-purple-300 text-sm">
              Transforming lives through ancient wisdom and divine connection
            </p>
          </div>
          
          <div className="border-t border-purple-500/30 pt-6">
            <p className="text-purple-200 text-sm">
              © 2024 Spiritual Guidance. All sacred practices protected by spiritual law.
            </p>
            <p className="text-purple-400 text-xs mt-2">
              Complete confidentiality guaranteed • 10 years of spiritual practice
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
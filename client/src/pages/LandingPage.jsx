import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const [selectedCapability, setSelectedCapability] = useState('Welding');
  const [openIndex, setOpenIndex] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      role: "Construction Manager",
      review: "Their metal fabrication work is exceptional. The attention to detail and quality of finish exceeded our expectations.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Project Director",
      review: "Outstanding service! Their team's expertise in welding helped us complete our project ahead of schedule.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Industrial Designer",
      review: "The precision in their metal cutting and fabrication is remarkable. Highly recommended for complex projects.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Architect",
      review: "Their innovative approach to metal fabrication helped bring our design vision to life. Exceptional craftsmanship!",
      rating: 5,
      image: "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const capabilities = {
    'Welding': {
      title: 'Welding',
      description: 'Welding is the process of fusing two or more parts using heat, pressure, or both. It\'s often done on metal, thermoplastics, and even wood. The resulting joint is known as a weldment, and the conjoined parts are known as the parent material. The material used to create the weldment is called a filler or consumable. Some people would say that welding is an art form since some materials call for specific processes or techniques.',
      image: 'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    'Metal Leaser Cutting': {
      title: 'Metal Leaser Cutting',
      description: 'Metal laser cutting is an advanced technology that uses a high-powered laser beam to cut through materials with precision and speed. The process involves directing the laser\'s output through a series of optics to achieve clean and intricate cuts, making it ideal for industrial manufacturing and intricate designs. Laser cutting is valued for its ability to produce minimal waste, high accuracy, and smooth finishes, even in complex patterns or dense materials. It is commonly used in industries like aerospace, automotive, and electronics.',
      image: 'https://glorylaser.com/wp-content/uploads/2024/01/custom-metal-laser-cutting-solution-1.jpg'
    },
    'Metal Cutting CNC': {
      title: 'Metal Cutting CNC',
      description: ' CNC metal cutting is a cutting-edge technology that automates the process of cutting materials using computer numerical control. It ensures exceptional precision and consistency, making it an invaluable tool in metal fabrication. CNC machines are programmed with detailed instructions to cut, carve, or shape metal into intricate designs or standardized components. This process not only saves time and labor but also minimizes errors, making it ideal for mass production and highly detailed work.',
      image: 'https://images.pexels.com/photos/10406128/pexels-photo-10406128.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    'Metal Folding': {
      title: 'Metal Folding',
      description: 'Metal folding is a critical metalworking technique used to create precise bends, folds, and shapes in metal sheets. By applying calculated force to specific areas, metal can be formed into complex components required in various industries, such as construction, automotive, and manufacturing. This process is integral to producing parts with accurate angles and dimensions, ensuring the structural integrity and functionality of the final product. Metal folding often requires specialized equipment and skilled operators to achieve the desired results.',
      image: 'https://images.pexels.com/photos/13386932/pexels-photo-13386932.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    'Metal Rolling': {
      title: 'Metal Rolling',
      description: 'Metal rolling is a fundamental process in metalworking where metal stock is passed through one or more pairs of rollers to reduce its thickness and ensure uniformity. This technique is essential for shaping metals into sheets, plates, or structural forms used in construction, automotive, and industrial applications. Metal rolling can be performed at different temperatures, with hot rolling being used for larger deformations and cold rolling for improved surface finishes and precision.',
      image: 'https://images.pexels.com/photos/767086/pexels-photo-767086.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    '3D Printing': {
      title: '3D Printing',
      description: 'Metal 3D printing, also known as metal additive manufacturing, is a revolutionary process that creates three-dimensional metal parts layer by layer based on digital designs. This technology allows for the production of complex geometries, lightweight structures, and custom components that are difficult or impossible to achieve with traditional manufacturing methods. Metal 3D printing is widely used in industries like aerospace, healthcare, and automotive, where precision and innovation are critical.',
      image: 'https://images.pexels.com/photos/20877036/pexels-photo-20877036/free-photo-of-3d-printer-with-camcorder.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  };

  const faqs = [
    {
      question: "Is metal fabrication safe?",
      answer: "Yes, metal fabrication is safe when proper safety protocols and equipment are used. Professional fabricators follow strict safety guidelines, use protective gear, and maintain well-ventilated workspaces. Regular training and maintenance of equipment ensure both worker and product safety."
    },
    {
      question: "What is the demand for metal fabrication?",
      answer: "The demand for metal fabrication is consistently high and growing. Industries such as construction, automotive, aerospace, and manufacturing rely heavily on metal fabrication services. The market is expected to continue expanding due to increasing infrastructure development and technological advancements."
    },
    {
      question: "Which metal is most in demand?",
      answer: "Steel remains the most in-demand metal for fabrication due to its versatility, strength, and cost-effectiveness. Other highly demanded metals include aluminum for its lightweight properties, stainless steel for its corrosion resistance, and copper for its electrical conductivity."
    },
    {
      question: "What is the purpose of fabrication?",
      answer: "Metal fabrication serves to transform raw metal materials into finished products or components. It involves cutting, bending, welding, and assembling metal parts to create everything from structural components to precise machinery parts. The purpose is to produce durable, custom-made metal products that meet specific industrial or commercial needs."
    },
    {
      question: "What is sheet metal material?",
      answer: "Sheet metal is metal formed into thin, flat pieces. It's available in various materials including steel, aluminum, brass, and copper, and comes in different thicknesses or gauges. Sheet metal is widely used in manufacturing, construction, and automotive industries for its versatility and strength-to-weight ratio."
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      <section className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Unlocking the Strength of the Steel
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Welding Magic on the Quantum Level, Building Tomorrow's Infrastructure Today Where Ideas Take Shape in Metal and Steel Solutions, Crafted with Care. Designing Metal, Designing Quality. Welding Heat. So Neat! Let Us Weld Your Visions Unfold.
              </p>
              <motion.button
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Launch the Virtual Experience</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://media.istockphoto.com/id/512990360/photo/worker-welding-metal.jpg?b=1&s=612x612&w=0&k=20&c=AEC-Vt0WyA-acQDloRaZFx9S6tA8g5md_XTnIqfHhQk="
                alt="Metal Manufacturing Process"
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Designing Your Future in Metal</h2>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  poster="/welding-video-poster.jpg"
                >
                  <source src="https://videos.pexels.com/video-files/4315553/4315553-sd_640_360_30fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: 'Professional Design',
                  description: 'Using CAD drawings or sketches is excellent way for the expert to ensure the smooth fabrication and production process',
                  icon: '🎨'
                },
                {
                  title: 'Production',
                  description: 'With the finishing process, you can select from various finishes depending on the part or component made',
                  icon: '⚙️'
                },
                {
                  title: 'Consultation',
                  description: 'The right company has an experienced representative who can discuss with you the various aspects of the process',
                  icon: '💬'
                },
                {
                  title: 'Quality Control',
                  description: 'For any design to surpass your expectations, quality control plays a critical role',
                  icon: '✓'
                },
                {
                  title: 'Finishing',
                  description: 'With the finishing process, you can select from various finishes depending on the part or component made',
                  icon: '🎯'
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            {...fadeIn}
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'No Minimum Order Quantity',
                description: 'Get started with only 100 parts. No need to commit to large quantities, making it cost-effective for projects of all sizes.',
                icon: '📦'
              },
              {
                title: 'Product Design and Material Guidance',
                description: 'Access a vast material selection of over 1000 options, paired with expert design support for injection moldable parts.',
                icon: '🎨'
              },
              {
                title: 'Low Costs Molds',
                description: "We've innovated mold production to offer quality molds at lower costs, ensuring affordability without compromising on quality.",
                icon: '💰'
              },
              {
                title: 'Fastest Lead times',
                description: 'With a 10-day delivery timeframe, our instant quotes and protomolds accelerate the process, swiftly delivering.',
                icon: '🚚'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 text-orange-500">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 text-blue-800">Our Capabilities</h2>
            <p className="text-blue-600 text-lg">
              We support you all the way from product development to delivering quality products to our customers
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(capabilities).map((capability) => (
              <button
                key={capability}
                onClick={() => setSelectedCapability(capability)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCapability === capability
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                  }`}
              >
                {capability}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedCapability}
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-blue-900">{capabilities[selectedCapability].title}</h3>
              <p className="text-gray-600">{capabilities[selectedCapability].description}</p>
              <motion.button
                className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </div>
            <motion.div
              className="rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={capabilities[selectedCapability].image}
                alt={capabilities[selectedCapability].title}
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4">Client Reviews</h2>
            <p className="text-gray-300 text-lg">
              What our clients say about our services
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-800/50 rounded-xl p-8"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={reviews[currentReview].image}
                    alt={reviews[currentReview].name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-400"
                  />
                  <div className="flex mb-4">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl italic mb-4 text-center">
                    "{reviews[currentReview].review}"
                  </p>
                  <h3 className="text-xl font-bold">{reviews[currentReview].name}</h3>
                  <p className="text-blue-400">{reviews[currentReview].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 text-blue-800">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 text-left flex justify-between items-center hover:text-blue-600 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-thin"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


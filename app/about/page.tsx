import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martin',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Carter',
    role: 'Head of Product Development',
    image: '/images/james.jpg',
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Director',
    image: '/images/emily.jpg',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 font-serif">
      <header className="py-12 text-center">
        <motion.div 
          className="text-4xl md:text-6xl font-bold" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          About Luxury LRP Cosmetics
        </motion.h1>
        <motion.div 
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          At Luxury LRP Cosmetics, we believe in the art of beauty that embraces elegance and innovation. Our journey began with a vision to create luxurious cosmetics that empower individuals to express their unique beauty.
        </motion.p>
      </header>

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div 
          className="text-3xl md:text-5xl font-semibold text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }}
        >
          Our History
        </motion.h2>
        <motion.div 
          className="mt-6 text-md md:text-lg text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1.5 }}
        >
          Founded in 2018, Luxury LRP Cosmetics quickly became a leader in the cosmetics industry by offering high-end products that blend artistry with skincare. Each product is meticulously crafted using the finest ingredients, ensuring a luxurious experience for our customers.
        </motion.p>
      </section>

      <section className="bg-orange-600 text-white py-20">
        <motion.div 
          className="text-3xl md:text-5xl font-semibold text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 2 }}
        >
          Our Values
        </motion.h2>
        <motion.div 
          className="mt-6 space-y-4 text-md max-w-2xl mx-auto" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 2.5 }}
        >
          <li>✨ Quality: We prioritize the highest standards in our products.</li>
          <li>✨ Innovation: We embrace creativity and new ideas in beauty.</li>
          <li>✨ Sustainability: We are committed to environmentally friendly practices.</li>
          <li>✨ Empowerment: We celebrate individuality and self-expression.</li>
        </motion.ul>
      </section>

      <section className="py-20 px-4">
        <motion.div 
          className="text-3xl md:text-5xl font-semibold text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 3 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div 
              key={member.name} 
              className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.9 }} 
              whileHover={{ scale: 1 }} 
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-md">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
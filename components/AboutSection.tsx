import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    position: 'Founder & CEO',
    bio: 'With over a decade of experience in the cosmetics industry, Sophia brings her passion for luxury beauty to every product at luxury LRP cosmetics.',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Carter',
    position: 'Chief Formulator',
    bio: 'An expert in cosmetic chemistry, James develops innovative formulas that combine luxury and efficacy.',
    image: '/images/james.jpg',
  },
  {
    name: 'Olivia Chen',
    position: 'Marketing Director',
    bio: 'Olivia crafts the luxury LRP cosmetics brand narrative, ensuring our message resonates with beauty enthusiasts worldwide.',
    image: '/images/olivia.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-4xl font-semibold text-center text-orange-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About luxury LRP cosmetics
        </motion.h2>

        <motion.div
          className="text-lg text-gray-700 text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At luxury LRP cosmetics, we believe that beauty is an expression of individuality. Our journey began with the vision of creating high-end, luxurious cosmetics that not only enhance beauty but also empower individuals to express their unique style. Each product is meticulously crafted with the finest ingredients, ensuring quality and elegance in every application.
        </motion.p>

        <motion.div
          className="text-3xl font-semibold text-center text-orange-500 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>

        <motion.div
          className="text-lg text-gray-700 text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our mission at luxury LRP cosmetics is to deliver unparalleled luxury and innovation in the cosmetics industry. We strive to inspire confidence through our sophisticated products, ensuring that each customer feels valued and beautiful. We are committed to sustainability and ethical practices, aiming to make a positive impact on both our customers and the environment.
        </motion.p>

        <motion.div
          className="text-3xl font-semibold text-center text-orange-500 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-orange-500">{member.name}</h4>
              <p className="text-gray-500">{member.position}</p>
              <p className="text-gray-700 mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-lg text-gray-700">
            At luxury LRP cosmetics, we are proud of our achievements, including industry awards for innovation and sustainability. Join us on this glamorous journey towards redefining beauty.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
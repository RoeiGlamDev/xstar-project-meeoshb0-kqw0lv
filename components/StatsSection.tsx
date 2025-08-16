import React from 'react';
import { motion } from 'framer-motion';

interface StatsSectionProps {
  achievements: {
    title: string;
    value: number;
  }[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ achievements }) => {
  return (
    <section className="bg-white p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
          luxury LRP cosmetics Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-semibold text-orange-600">
                {achievement.value}
              </h3>
              <p className="text-xl text-gray-700 mt-2">{achievement.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
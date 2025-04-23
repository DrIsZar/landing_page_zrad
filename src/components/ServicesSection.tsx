import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get exclusive access to these premium services at a fraction of the original price.
            All subscriptions are legitimate and instantly delivered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Not finding what you're looking for? We have more services available.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
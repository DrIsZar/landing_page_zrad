import React, { useState } from 'react';
import { Service } from '../types/types';
import * as LucideIcons from 'lucide-react';
import Modal from './Modal';
import ServiceVariations from './ServiceVariations';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Package;

  return (
    <>
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className={`h-48 bg-gray-200 dark:bg-gray-700 relative`}>
          {service.imageUrl ? (
            <img 
              src={service.imageUrl} 
              alt={service.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <IconComponent size={48} className={`${service.color.replace('bg-', 'text-')}`} />
            </div>
          )}
          <div className={`absolute top-0 left-0 w-full h-1 ${service.color}`}></div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{service.name}</h3>
            <div className="text-right">
              <div className="font-bold text-blue-600 dark:text-blue-400">{service.price}</div>
              {service.originalPrice && (
                <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  {service.originalPrice}
                </div>
              )}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
            {service.description}
          </p>
          
          <button 
            className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-gray-800 dark:text-white font-medium py-2 px-4 rounded-lg transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            View Options
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ServiceVariations service={service} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default ServiceCard;
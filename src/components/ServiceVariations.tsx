import React from 'react';
import { Service } from '../types/types';
import * as LucideIcons from 'lucide-react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceVariationsProps {
  service: Service;
  onClose: () => void;
}

const ServiceVariations: React.FC<ServiceVariationsProps> = ({ service }) => {
  const navigate = useNavigate();
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Package;

  const handleBuy = (variantId: string) => {
    navigate(`/service/${service.id}/variant/${variantId}`);
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-lg ${service.color} bg-opacity-10`}>
          <IconComponent size={32} className={service.color.replace('bg-', 'text-')} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{service.name}</h2>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">5.0 (100+ reviews)</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {service.pricingTiers.map((tier, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <div>
              <h3 className="font-medium text-gray-800 dark:text-white">{tier.duration}</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {tier.price}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">• In Stock ✓</span>
              </div>
            </div>
            <button 
              onClick={() => handleBuy(tier.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Buy
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-medium text-gray-800 dark:text-white mb-2">Product Information</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceVariations;
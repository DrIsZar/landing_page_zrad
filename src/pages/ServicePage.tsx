import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';
import { Bitcoin, CreditCard, GoalIcon as PaypalIcon } from 'lucide-react';

const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">Return Home</Link>
        </div>
      </div>
    );
  }

  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Package;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
              {service.imageUrl ? (
                <img 
                  src={service.imageUrl} 
                  alt={service.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <IconComponent size={96} className={`${service.color.replace('bg-', 'text-')}`} />
                </div>
              )}
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{service.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className={`p-2 rounded-full ${service.color} bg-opacity-10 mr-3`}>
                    <IconComponent size={20} className={service.color.replace('bg-', 'text-')} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Pricing Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.pricingTiers.map((tier, index) => (
                <div key={index} className="border dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    {tier.duration}
                  </h3>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {tier.price}
                  </div>
                  <button 
                    onClick={() => window.location.href = 'https://discord.gg/zrad'}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Purchase
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Payment Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center p-4 border dark:border-gray-700 rounded-lg">
                <Bitcoin className="mr-3 text-orange-500" size={24} />
                <span className="text-gray-700 dark:text-gray-300">Cryptocurrency</span>
              </div>
              <div className="flex items-center p-4 border dark:border-gray-700 rounded-lg">
                <PaypalIcon className="mr-3 text-blue-500" size={24} />
                <span className="text-gray-700 dark:text-gray-300">PayPal (F&F)</span>
              </div>
              <div className="flex items-center p-4 border dark:border-gray-700 rounded-lg">
                <CreditCard className="mr-3 text-purple-500" size={24} />
                <span className="text-gray-700 dark:text-gray-300">Credit Card</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6">Join our Discord community to complete your purchase and get instant access.</p>
            <a 
              href="https://discord.gg/zrad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Order via Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
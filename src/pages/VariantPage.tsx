import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';
import { Star, Minus, Plus, Bitcoin, CreditCard } from 'lucide-react';

const VariantPage: React.FC = () => {
  const { serviceId, variantId } = useParams<{ serviceId: string; variantId: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const service = services.find(s => s.id === serviceId);
  const variant = service?.pricingTiers.find(v => v.id === variantId);

  if (!service || !variant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Package;
  const totalPrice = Number(variant.price.replace('$', '')) * quantity;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image/Icon */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              {service.imageUrl ? (
                <img 
                  src={service.imageUrl} 
                  alt={service.name} 
                  className="w-full h-96 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <IconComponent size={96} className={service.color.replace('bg-', 'text-')} />
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {service.name} - {variant.duration}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    5.0 (100+ reviews)
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  ${totalPrice.toFixed(2)}
                </div>
                {service.originalPrice && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                    Original Price: {service.originalPrice}
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-lg border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-xl font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-lg border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 p-4 rounded-lg border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Bitcoin className="text-orange-500" />
                    <span>Cryptocurrency</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 p-4 rounded-lg border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <CreditCard className="text-blue-500" />
                    <span>Credit Card</span>
                  </button>
                </div>
              </div>

              {/* Buy Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors mb-6">
                Buy Now
              </button>

              {/* Product Information */}
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-lg font-medium mb-2">Product Information</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariantPage;
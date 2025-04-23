import React from 'react';
import { MessageCircle, Mail, Globe } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions or need assistance? Our support team is here to help.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="mx-auto w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <MessageCircle size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Discord</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Join our Discord community for instant support and updates.
              </p>
              <a 
                href="https://discord.gg/zrad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Join Discord
              </a>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="mx-auto w-14 h-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <Mail size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a 
                href="mailto:support@zradservices.com" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Email Support
              </a>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="mx-auto w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <Globe size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">FAQ</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Browse our knowledge base for answers to common questions.
              </p>
              <button 
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                View FAQ
              </button>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-blue-600 dark:bg-blue-700 rounded-xl shadow-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Join thousands of satisfied customers and start saving on premium software today.
            </p>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Browse Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
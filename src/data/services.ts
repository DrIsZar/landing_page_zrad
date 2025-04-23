import { Service } from '../types/types';

export const services: Service[] = [
  {
    id: 'adobe-cc',
    name: 'Adobe Creative Cloud',
    description: 'Full access to all Creative Cloud apps with 100GB storage and 1K credits.',
    price: 'From $7/mo',
    originalPrice: '$54.99/mo',
    icon: 'PenTool',
    color: 'bg-red-500',
    features: [
      '100GB Cloud Storage',
      '1000 Adobe Credits',
      'All Creative Cloud Apps',
      'Latest Updates & Features',
      'Sync Across Devices',
      'Premium Templates & Assets'
    ],
    pricingTiers: [
      { id: 'adobe-cc-1m', duration: '1 Month', price: '$7' },
      { id: 'adobe-cc-3m', duration: '3 Months', price: '$18' },
      { id: 'adobe-cc-6m', duration: '6 Months', price: '$30' },
      { id: 'adobe-cc-12m', duration: '1 Year', price: '$45' }
    ]
  },
  {
    id: 'microsoft365',
    name: 'Microsoft 365',
    description: 'Access to all Microsoft apps including Word, Excel, PowerPoint, and more.',
    price: 'From $25/year',
    originalPrice: '$69.99/year',
    icon: 'Box',
    color: 'bg-blue-500',
    features: [
      'All Microsoft 365 Apps',
      'OneDrive Cloud Storage',
      'Cross-Platform Access',
      'Real-Time Collaboration',
      'Premium Features',
      'Regular Updates'
    ],
    pricingTiers: [
      { id: 'ms365-12m', duration: '12 Months', price: '$25' },
      { id: 'ms365-lifetime', duration: 'Lifetime', price: '$35' }
    ]
  },
  {
    id: 'spotify',
    name: 'Spotify Premium',
    description: 'Ad-free music streaming with offline playback and high quality audio.',
    price: 'From $5/mo',
    originalPrice: '$9.99/mo',
    icon: 'Music',
    color: 'bg-green-500',
    features: [
      'Ad-free Listening',
      'Offline Downloads',
      'High Quality Audio',
      'Cross-Platform Access',
      'Unlimited Skips',
      'Custom Playlists'
    ],
    pricingTiers: [
      { id: 'spotify-1m', duration: '1 Month', price: '$5' },
      { id: 'spotify-3m', duration: '3 Months', price: '$8' },
      { id: 'spotify-6m', duration: '6 Months', price: '$12' },
      { id: 'spotify-lifetime', duration: 'Lifetime', price: '$30' }
    ]
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus',
    description: 'Priority access, faster response times, and exclusive features.',
    price: 'From $6.99/mo',
    originalPrice: '$20/mo',
    icon: 'MessageSquare',
    color: 'bg-teal-500',
    features: [
      'Priority Access',
      'Faster Response Times',
      'GPT-4 Access',
      'Custom Instructions',
      'Early Access Features',
      'Higher Usage Limits'
    ],
    pricingTiers: [
      { id: 'chatgpt-1m-shared', duration: '1 Month (Shared)', price: '$6.99' },
      { id: 'chatgpt-2m-shared', duration: '2 Months (Shared)', price: '$7.99' },
      { id: 'chatgpt-3m-shared', duration: '3 Months (Shared)', price: '$11.99' },
      { id: 'chatgpt-12m-shared', duration: '12 Months (Shared)', price: '$45' },
      { id: 'chatgpt-1m-personal', duration: '1 Month (Personal)', price: '$16' },
      { id: 'chatgpt-3m-personal', duration: '3 Months (Personal)', price: '$48' },
      { id: 'chatgpt-6m-personal', duration: '6 Months (Personal)', price: '$85' },
      { id: 'chatgpt-12m-personal', duration: '1 Year (Personal)', price: '$170' }
    ]
  }
];
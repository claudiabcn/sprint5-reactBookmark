import type { FeatureCard} from './types';

export const features: FeatureCard[] = [
 {
    id: 'bookmarking',
    title: 'Bookmark in one click',
    image: '../assets/images/illustration-features-tab-1.svg',
    description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
  },
  {
    id: 'searching',
    title: 'Intelligent search',
    image: '../assets/images/illustration-features-tab-2.svg',
    description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
  },
  {
    id: 'sharing',
    title: 'Share your bookmarks',
    image: '../assets/images/illustration-features-tab-3.svg',
    description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
  }
];

export const browsers: Browser[] = [
  { name: 'Chrome', version: '62', image: '..assets/images/logo-chrome.svg' },
  { name: 'Firefox', version: '55', image: '..assets/images/logo-firefox.svg' },
  { name: 'Opera', version: '46', image: '..assets/images/logo-opera.svg' }
];
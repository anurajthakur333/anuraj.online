// src/components/GlobalClickSound.jsx
import { useEffect } from 'react';
import { playClick } from '../playClick';

// Define the clickable elements in a separate array for easy editing
const clickableSelectors = [
  'button',
  'input',
  'textarea',
  '.side-nav-item',
  '.sensitive-button',
  '.nav-tab-btn',
  '.nav-sidebar-group-item',
  '.nav-pill',
  '.swiper-pagination-bullet',
  '.btn-group',
  '.nav-pills button'
];

const GlobalClickSound = ({ children }) => {
  useEffect(() => {
    // Function to check if the clicked element is clickable
    const isClickOnValidElement = (target) => {
      return clickableSelectors.some(selector => target.closest(selector));
    };

    // Click handler
    const handleClick = (event) => {
      if (isClickOnValidElement(event.target)) {
        playClick(); // Play the click sound
      }
    };

    // Adding the event listener
    document.addEventListener('click', handleClick);

    // Cleanup event listener on unmount
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <>{children}</>;
};

export default GlobalClickSound;

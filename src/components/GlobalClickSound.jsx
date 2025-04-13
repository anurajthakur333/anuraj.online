import { useEffect } from 'react';
import { playClick } from '../playClick'; // Import the playClick function

const GlobalClickSound = ({ children }) => {
  useEffect(() => {
    const handleClick = () => {
      playClick(); // Play sound on every click
    };

    document.addEventListener('click', handleClick);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <>{children}</>;
};

export default GlobalClickSound;

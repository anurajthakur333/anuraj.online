// src/playClick.js
let audioContext;
let audioBuffer = null;

const loadClickSound = async () => {
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const response = await fetch('/sounds/click.mp3');
    const arrayBuffer = await response.arrayBuffer();
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  } catch (error) {
    console.error('Failed to load click sound:', error);
  }
};

// Load on import
loadClickSound();

// Resume on first interaction (autoplay policy fix)
document.addEventListener('click', () => {
  if (audioContext?.state === 'suspended') {
    audioContext.resume();
  }
}, { once: true });

export const playClick = () => {
  if (!audioBuffer || !audioContext) return;

  const clickSource = audioContext.createBufferSource();
  clickSource.buffer = audioBuffer;
  clickSource.connect(audioContext.destination);
  clickSource.start(0);
};

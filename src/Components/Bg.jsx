import { useEffect } from 'react';

const Bg = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', 'particles-js.json', () => {
        console.log('Particles.js loaded');
      });
    } else {
      console.error('particlesJS not found. Make sure the CDN is added in public/index.html');
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100dvh',
        zIndex: -1,
        backgroundColor: '#0F0F1B',
      }}
    />
  );
};

export default Bg;

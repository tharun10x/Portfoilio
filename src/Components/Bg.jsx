import { useEffect } from 'react';

const Bg = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', 'particles-js.json', () => {
        if (import.meta.env.DEV) {
          console.log('Particles.js loaded');
        }
      });
    } else if (import.meta.env.DEV) {
      console.error('particlesJS not found. Make sure the CDN is added in index.html');
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
        opacity:0.8
      }}
    />
  );
};

export default Bg;

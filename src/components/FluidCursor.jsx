import { useEffect, useRef } from 'react';
import initCursor from '../utils/fluidCursor';

const FluidCursor = () => {
  const initialized = useRef(false);

  useEffect(() => {
    // Double initialization se bachne ke liye
    if (initialized.current) return;
    
    // Canvas ready hone ka wait karo
    const canvas = document.getElementById('fluid');
    if (!canvas) {
      console.error('Canvas not found!');
      return;
    }

    try {
      initCursor();
      initialized.current = true;
      console.log('✅ Fluid cursor initialized successfully!');
    } catch (error) {
      console.error('❌ Fluid cursor initialization failed:', error);
    }

    // Cleanup function
    return () => {
      initialized.current = false;
    };
  }, []);

  return (
  <div className='h-screen w-full fixed top-0 left-0 pointer-events-none' 
       style={{ zIndex: 1 }}>  {/* -z-10 ko hata diya */}
    <canvas 
      id="fluid" 
      className='w-full h-full'
      style={{ 
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        mixBlendMode: 'screen' // Yeh add karo - effect zyada visible hoga
      }}
    />
  </div>
);
};

export default FluidCursor;
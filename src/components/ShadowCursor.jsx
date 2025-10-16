import { useEffect } from 'react';
import initCursor from '../utils/useShadowCursor';

const ShadowCursor = () => {
  useEffect(() => {
    initCursor();
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-screen z-[-1]'>
      <canvas id="fluid" className='w-full h-full' />
    </div>
  );
};

export default ShadowCursor;
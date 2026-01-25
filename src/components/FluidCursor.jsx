import { useEffect } from 'react';
import fluidCursor from '../hooks/useFluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <canvas id="fluid" className="h-full w-full" />
    </div>
  );
};

export default FluidCursor;

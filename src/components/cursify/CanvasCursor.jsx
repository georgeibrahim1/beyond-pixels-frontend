import "./curserCss.css";
'use client';

import useCanvasCursor from './cursorHook';

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className='pointer-events-none fixed inset-0 curstyle' id='canvas' />;
};

export default CanvasCursor;

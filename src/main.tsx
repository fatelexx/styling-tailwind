import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <h1 className="text-3xl font-bold underline text-blue-400">
      Hello world from Floren Alexis!
    </h1>
  </StrictMode>
);

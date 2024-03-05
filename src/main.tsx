import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <div className="flex flex-col md:flex-row gap-1">
      <header>
        head
      </header>
      <main>
        <h1 className="text-3xl font-bold underline text-blue-400">
          Hello world from Floren Alexis!
        </h1>
      </main>
    </div>
    <footer>
      foot
    </footer>
  </StrictMode>
);

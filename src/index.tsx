import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

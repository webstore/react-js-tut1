import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/bootstrap/bootstrap.min.css';

import App from './App';
import Product from './components/Product';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Product />
  </StrictMode>
);

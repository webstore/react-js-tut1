import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/bootstrap/bootstrap.min.css';

import App from './App';
import Product from './components/Product';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const products = [
  {
    id: 1,
    name: 'Entertainment equipment',
    description:
      'In marketing, a product is an object, or system, or service made available for consumer use as of the consumer demand',
    price: '$100',
    img: 'https://raw.githubusercontent.com/webstore/react-js-tut1/main/src/assets/images/download.jpg',
  },

  {
    id: 2,
    name: 'Second equipment',
    description:
      'In marketing, a product is an object, or system, or service made available for consumer use as of the consumer demand',
    price: '$200',
    img: 'https://raw.githubusercontent.com/webstore/react-js-tut1/main/src/assets/images/download.jpg',
  },

  {
    id: 3,
    name: 'Second equipment',
    description:
      'In marketing, a product is an object, or system, or service made available for consumer use as of the consumer demand',
    price: '$200',
    img: 'https://raw.githubusercontent.com/webstore/react-js-tut1/main/src/assets/images/download.jpg',
  },

  {
    id: 4,
    name: 'Second equipment',
    description:
      'In marketing, a product is an object, or system, or service made available for consumer use as of the consumer demand',
    price: '$200',
    img: 'https://raw.githubusercontent.com/webstore/react-js-tut1/main/src/assets/images/download.jpg',
  },

  {
    id: 5,
    name: 'Second equipment',
    description:
      'In marketing, a product is an object, or system, or service made available for consumer use as of the consumer demand',
    price: '$200',
    img: 'https://raw.githubusercontent.com/webstore/react-js-tut1/main/src/assets/images/download.jpg',
  },
];

root.render(
  <StrictMode>
    <div className="row">
      {products.map((prdItem) => (
        <Product key={prdItem.id} {...prdItem} />
      ))}
    </div>
  </StrictMode>
);

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import App from './app/app';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider
    theme={{
      fontFamily: 'Roboto, sans-serif',
    }}
  >
    <HelmetProvider>
      <StrictMode>
        <Helmet>
          <title>Practera</title>
        </Helmet>
        <RouterProvider router={router} />
      </StrictMode>
    </HelmetProvider>
  </MantineProvider>
);

import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Select from './Components/Select';
import Search from './Components/Search';
import BackTest from './Components/BackTest';

const BuilderPage = React.lazy(() => import('./pages/BuilderPage'));
const StartPage = React.lazy(() => import('./pages/StartPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: (
        <Suspense fallback={<p>Loading...</p>}>
          <ErrorPage />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: <HomePage />,
        },

        {
          path: '/app/start',
          element: <StartPage />,
        },
        {
          path: '/index-builder/create',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <BuilderPage />
            </Suspense>
          ),
          children: [
            {
              path: '/index-builder/create/search',
              element: <Search />,
            },
            {
              path: '/index-builder/create/select',
              element: <Select />,
            },
            {
              path: '/index-builder/create/backtest',
              element: <BackTest />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

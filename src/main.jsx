import App from './App'

import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {StrictMode} from "react";
import AppDemoOne from "./view/AppDemoOne";
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

const container = document.getElementById('root');

const root = createRoot(container); // createRoot(container!) if you use TypeScript

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail-one",
    element: <AppDemoOne />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

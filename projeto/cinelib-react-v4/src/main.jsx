import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Filme from './pages/Filme/Filme.jsx';
import Search from './pages/Search/Search.jsx';

import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/filme/:id",
                element: <Filme />,
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
import './global.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Toaster } from 'react-hot-toast'

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Toaster/>
        <App />
    </StrictMode>
)
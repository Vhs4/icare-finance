import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './assets/fonts/ifood-fonts.css'
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap-custom.css';
import './styles/main-struture.css';
import './styles/main-sidebar.css';
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

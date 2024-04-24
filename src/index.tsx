import 'normalize.css';
import './styles/border.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ScreenProvider } from './styles/ScreenProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ScreenProvider> {/* 使用 ScreenProvider 包裹 App */}
      <App />
    </ScreenProvider>
  </React.StrictMode>
);

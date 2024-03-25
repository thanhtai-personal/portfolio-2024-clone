import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoute } from '@/appRoute/index';
import './reset.css';
import './index.css';
import { ThemeProvider } from '@/components/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider useSettingBoard>
      <AppRoute />
    </ThemeProvider>
  </React.StrictMode>
);

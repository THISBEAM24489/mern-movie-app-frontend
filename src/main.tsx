import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MyAppRouter from './myApprouter.tsx';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
          <MyAppRouter />
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);

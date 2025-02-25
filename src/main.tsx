import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App.tsx';
import Layout from './layout/Layout.tsx';


createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
  <Layout>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </Layout>
 </BrowserRouter>
)

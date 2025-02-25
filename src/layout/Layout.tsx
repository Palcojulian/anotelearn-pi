import type { JSX } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import './Layout.css';

interface Children {
    children: JSX.Element;
}

const Layout = ({ children }: Children) => {
  return (
    <div className='layout'>
      <Header />
      <main className='layout-content' >{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;
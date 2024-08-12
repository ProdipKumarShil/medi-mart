import Footer from '@/components/Sections/Footer/Footer';
import Navbar from '@/components/Sections/Navbar/Navbar';
import React, { ReactNode } from 'react'
interface LayoutProps {
  children: ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default layout
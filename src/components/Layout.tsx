import Navbar from '../components/Navbar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-col">
      <div className='Homepage overflow-hidden justify-center'>
        <Navbar />
        {props.children}
      </div>
      <div className="bg-blue py-4 text-center">
        <p className=' text-white font-semibold'>
          © 2024 TV Eats
        </p>
      </div>
    </div>

  );
}

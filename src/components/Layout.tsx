import Navbar from '../components/Navbar';
import { ReactNode } from 'react';
import { useModalStore } from '../stores/modalStore';
import ModalLayout from './ModalLayout';

interface LayoutProps {
  children: ReactNode
}

export default function Layout(props: LayoutProps) {
  const { modalOpen } = useModalStore();

  return (
    <div className="flex flex-col">
      <div className='Homepage overflow-hidden justify-center'>
        <Navbar />
        {props.children}
        {modalOpen
          ?
          <ModalLayout />
          : null
        }
      </div>
      <div className="bg-blue py-4 text-center">
        <p className=' text-white font-semibold'>
          © 2024 TV Eats
        </p>
      </div>
    </div>

  );
}

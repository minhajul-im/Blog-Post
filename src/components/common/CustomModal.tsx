import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CrossIcon } from '../../icons';

type ModalType = {
  isOpen: boolean;
  isDark: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const CustomModal = ({ isOpen, onClose, children, isDark }: ModalType) => {
  const rootModal = document.getElementById('root-modal');

  useEffect(() => {
    const getKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose() : null;
    document.body.addEventListener('keydown', getKey);

    return () => document.body.removeEventListener('keydown', getKey);
  }, [onClose]);

  if (!isOpen || rootModal === null) return null;

  return createPortal(
    <main className="fixed inset-0 bg-black bg-opacity-65 flex justify-center items-center">
      <section className="p-6 rounded-lg relative bg-BG-soft text-TX-soft max-w-3xl h-auto">
        <button
          onClick={onClose}
          className="absolute right-1 top-1 p-2 rounded-full bg-BG-soft hover:bg-BG-main text-TX-main"
        >
          <CrossIcon isDark={isDark} />
        </button>
        {children}
      </section>
    </main>,
    rootModal
  );
};

export default CustomModal;

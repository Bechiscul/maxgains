import { FunctionComponent, JSX } from "preact";

export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const handleOnClick = (e: JSX.TargetedMouseEvent<HTMLElement>) => {
    if (onClose) onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <div
        onClick={handleOnClick}
        className="bg-neutral-900 opacity-20 w-screen h-screen"
      />
      <section
        onClick={(e) => e.stopImmediatePropagation()}
        className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-10/12 p-6 rounded"
      >
        {children}
      </section>
    </div>
  );
};

export default Modal;

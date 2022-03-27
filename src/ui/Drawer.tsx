import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

export interface DrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
}

// const Drawer: FunctionComponent<DrawerProps> = ({
//   isOpen,
//   onClose,
//   children,
// }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <section>

//     </section>
//     <section
//       className="fixed w-screen h-full top-0 flex justify-end opacity-80 bg-neutral-900"
//       onClick={onClose}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white h-full w-10/12"
//       >
//         {children}
//       </div>
//     </section>
//   );
// };

// export default Drawer;

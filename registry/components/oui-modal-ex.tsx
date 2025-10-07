import { Modal, ModalOverlay } from "@/registry/components/ui/oui-modal";
import * as Rac from "react-aria-components";

export interface ModalExProps extends Rac.ModalOverlayProps {
  overlayClassName?: Rac.ModalOverlayProps["className"];
}

/**
 * Composes ModalOverlay and Modal.
 * `className` is applied to Modal, `overlayClassName` and other props are applied to ModalOverlay.
 */
export function ModalEx({
  className,
  overlayClassName,
  children,
  ...props
}: ModalExProps) {
  return (
    <ModalOverlay className={overlayClassName} {...props}>
      <Modal className={className}>{children}</Modal>
    </ModalOverlay>
  );
}

export default function Component() {
  return <div className="p-4">ModalEx</div>;
}

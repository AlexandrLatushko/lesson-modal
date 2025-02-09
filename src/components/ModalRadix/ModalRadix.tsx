import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./ModalRadix.module.css";
import * as Dialog  from "@radix-ui/react-dialog";
import { ReactNode } from "react";

type Props = {
  open: boolean
  onClose: () => void
  children: ReactNode
  modalTitle: string
}

export const ModalRadix = ({ modalTitle, onClose, children, open }: Props) => (
  <Dialog.Root open={open} onOpenChange={onClose}>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.Overlay} />
      <Dialog.Content className={styles.Content}>
        <Dialog.Title className={styles.Title}>{modalTitle}</Dialog.Title>
        <hr />
        {children}
        <Dialog.Close asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)


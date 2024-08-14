import { ReactNode } from 'react'
import { create } from 'zustand'

export interface ModalState {
  modalOpen: boolean
  modalContent: ReactNode
  openModalWithContent: (content: ReactNode) => void
  closeModal: () => void
  closeModalClearContent: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  modalOpen: false,
  modalContent: <></>,
  openModal: () => set((state: ModalState) => ({ modalOpen: true })),
  openModalWithContent: (content: ReactNode) => set((state: ModalState) => ({ modalOpen: true, modalContent: content })),
  closeModal: () => set((state: ModalState) => ({ modalOpen: false })),
  closeModalClearContent: () => set((state: ModalState) => ({ modalOpen: false, modalContent: <></> })),
}))
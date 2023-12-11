import { create } from "zustand";
import { Product } from "@/types";

interface previewModalStore {
    isOpen: boolean
    data?: Product
    onOpen: (data: Product) => void
    onClose: () => void
}

const usePreviewModalStore = create<previewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ data: data, isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default usePreviewModalStore
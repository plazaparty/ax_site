"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import ExpertConsultModal from "@/components/ExpertConsultModal";

type Ctx = {
  open: () => void;
  close: () => void;
};

const ConsultModalContext = createContext<Ctx | undefined>(undefined);

export function ConsultModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ open: openModal, close: closeModal }), [openModal, closeModal]);

  return (
    <ConsultModalContext.Provider value={value}>
      {children}
      <ExpertConsultModal open={open} onClose={closeModal} />
    </ConsultModalContext.Provider>
  );
}

export function useConsultModal() {
  const ctx = useContext(ConsultModalContext);
  if (!ctx) throw new Error("useConsultModal must be used within ConsultModalProvider");
  return ctx;
}

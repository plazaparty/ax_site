"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import {
  CustomerState,
  CustomerType,
  AxStage,
  NeededTech,
  ProductPreference,
} from "@/types";

interface CustomerContextType extends CustomerState {
  setCustomerType: (type: CustomerType) => void;
  setAxStage: (stage: AxStage) => void;
  setNeededTech: (tech: NeededTech) => void;
  setProductType: (type: ProductPreference) => void;
  setFreePrompt: (prompt: string) => void;
  reset: () => void;
}

const initialState: CustomerState = {
  customerType: null,
  axStage: null,
  neededTech: null,
  productType: null,
  freePrompt: "",
};

const CustomerContext = createContext<CustomerContextType | undefined>(
  undefined
);

export function CustomerProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CustomerState>(initialState);

  const setCustomerType = useCallback(
    (type: CustomerType) => setState((s) => ({ ...s, customerType: type })),
    []
  );
  const setAxStage = useCallback(
    (stage: AxStage) => setState((s) => ({ ...s, axStage: stage })),
    []
  );
  const setNeededTech = useCallback(
    (tech: NeededTech) => setState((s) => ({ ...s, neededTech: tech })),
    []
  );
  const setProductType = useCallback(
    (type: ProductPreference) => setState((s) => ({ ...s, productType: type })),
    []
  );
  const setFreePrompt = useCallback(
    (prompt: string) => setState((s) => ({ ...s, freePrompt: prompt })),
    []
  );
  const reset = useCallback(() => setState(initialState), []);

  return (
    <CustomerContext.Provider
      value={{
        ...state,
        setCustomerType,
        setAxStage,
        setNeededTech,
        setProductType,
        setFreePrompt,
        reset,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  const ctx = useContext(CustomerContext);
  if (!ctx) throw new Error("useCustomer must be used within CustomerProvider");
  return ctx;
}

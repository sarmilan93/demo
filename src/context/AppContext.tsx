import { createContext, useContext } from "react";
import {
  FormState,
  FormAction,
  SlovakiaConfig,
  ValidationError,
  AppView,
} from "../types";

export interface AppContextValue {
  formState: FormState;
  dispatch: React.Dispatch<FormAction>;
  config: SlovakiaConfig;
  validationErrors: ValidationError[];
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationError[]>>;
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  selectedComponentId: string | null;
  setSelectedComponentId: (id: string | null) => void;
}

export const AppContext = createContext<AppContextValue | null>(null);

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};

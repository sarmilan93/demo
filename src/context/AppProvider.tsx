import { useReducer, useState } from "react";
import { AppContext } from "./AppContext";
import { formReducer } from "../reducers/formReducer";
import { buildDefaultFormValues } from "../utils";
import slovakiaConfig from "../config/slovakia.json";
import { SlovakiaConfig, AppView } from "../types";

const config = slovakiaConfig as SlovakiaConfig;
const initialFormValues = buildDefaultFormValues(Object.values(config.tabs));

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [formState, dispatch] = useReducer(formReducer, {
    values: initialFormValues,
    isDirty: false,
    isSubmitted: false,
  });
  const [validationErrors, setValidationErrors] = useState([]);
  const [currentView, setCurrentView] = useState<AppView>("main");
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);

  return (
    <AppContext.Provider
      value={{
        formState,
        dispatch,
        config: slovakiaConfig as SlovakiaConfig,
        validationErrors,
        setValidationErrors,
        currentView,
        setCurrentView,
        selectedComponentId,
        setSelectedComponentId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

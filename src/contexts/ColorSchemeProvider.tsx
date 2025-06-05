import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useColorScheme as useSystemColorScheme } from "react-native";
import { storage } from "../utils/storage";

type Scheme = "light" | "dark";

const STORAGE_KEY = "user-color-scheme";

const ColorSchemeContext = createContext<{
  scheme: Scheme;
  toggleScheme: () => void;
} | null>(null);

export const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
  const systemScheme = useSystemColorScheme() ?? "light";
  const [scheme, setScheme] = useState<Scheme>("light");

  useEffect(() => {
    const savedScheme = storage.getString(STORAGE_KEY) as Scheme | undefined;
    setScheme(savedScheme ?? systemScheme);
  }, []);

  const toggleScheme = () => {
    const newScheme = scheme === "light" ? "dark" : "light";
    setScheme(newScheme);
    storage.set(STORAGE_KEY, newScheme);
  };

  return (
    <ColorSchemeContext.Provider value={{ scheme, toggleScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorSchemeContext = () => {
  const context = useContext(ColorSchemeContext);
  if (!context) {
    throw new Error("ColorSchemeContext must be used within a provider");
  }
  return context;
};

import { createContext, useState } from "react";

type TemaContextType = "light" | "dark";

interface TemaContext {
  tema: TemaContextType;
  toggleTema: () => void;
}

export const TemaContext = createContext<TemaContext | null>(null);

interface TemaProviderProps {
  children: React.ReactNode;
}

export const TemaProvider = ({ children }: TemaProviderProps) => {
  const [tema, setTema] = useState<TemaContextType>("light");
  const toggleTema = () => {
    setTema((prevTema) => (prevTema === "light" ? "dark" : "light"));
  };
  return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
};

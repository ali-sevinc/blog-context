import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";

type InitialType = {
  isFakeDark: boolean;
  handleToggle: () => void;
};
const initialState: InitialType = {
  isFakeDark: false,
  handleToggle: () => {},
};

const DarkModeContext = createContext(initialState);

export default function DarkModeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  function handleToggle() {
    setIsFakeDark((prev) => !prev);
  }

  return (
    <DarkModeContext.Provider value={{ isFakeDark, handleToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext() {
  const darkMode = useContext(DarkModeContext);
  return darkMode;
}

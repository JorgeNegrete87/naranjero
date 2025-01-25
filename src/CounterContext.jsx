import { createContext, useState } from "react";

// Create the Context
export const ItemContext = createContext();

// Create the Provider
export const CounterProvider = ({ children }) => {
  const items = [
    { name: "Torta", id: 1 },
    { name: "Taco", id: 2 },
    { name: "Mollete", id: 3 },
    { name: "Burro", id: 4 },
  ];

  const [show, setShow] = useState(items.map(() => true));
  // State to manage item counts
  const [counts, setCounts] = useState(items.map(() => 0)); // Initialize all counts to 0

  // Function to reset all counts to 0
  const resetCounts = () => {
    setCounts(counts.map(() => 0));
  };

  const restoreItems = () => {
    setShow(show.map(() => true));
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        counts,
        setCounts,
        resetCounts,
        show,
        setShow,
        restoreItems,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

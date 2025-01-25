import { useContext } from "react";
import { ItemContext } from "./CounterContext";

const Counter = ({ index }) => {
  // Get counts and setCounts from context
  const { counts, setCounts, show, setShow } = useContext(ItemContext);

  // Increment and decrement functions
  const increment = () => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const decrement = () => {
    const newCounts = [...counts];
    newCounts[index] -= 1;
    setCounts(newCounts);
  };

  const deleteItem = () => {
    const newShow = [...show];
    newShow[index] = false;
    setShow(newShow);

    // Set counter to 0 to have totItems reduced
    const newCounts = [...counts];
    newCounts[index] = 0;
    setCounts(newCounts);
  };

  if (!show[index]) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button
        type="button"
        style={{
          fontSize: "100%",
          backgroundColor: "powderblue",
          borderRadius: "8%",
          color: "black",
        }}
      >
        {counts[index]} {/* Display the count for this item */}
      </button>

      <button
        type="button"
        style={{
          fontSize: "60%",
          backgroundColor: "green",
          borderRadius: "8%",
          color: "white",
        }}
        onClick={increment}
      >
        +
      </button>

      <button
        type="button"
        style={{
          fontSize: "60%",
          backgroundColor: "red",
          borderRadius: "8%",
          color: "white",
        }}
        onClick={decrement}
      >
        -
      </button>
      <button
        type="button"
        style={{
          fontSize: "60%",
          backgroundColor: "black",
          borderRadius: "8%",
          color: "white",
        }}
        onClick={deleteItem}
      >
        Delete Items
      </button>
    </div>
  );
};

export default Counter;

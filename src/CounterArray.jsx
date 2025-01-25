import { useContext } from "react";
import Counter from "./counter";
import { ItemContext } from "./CounterContext";

const CounterArray = () => {
  // Get items, counts, and reset function from context
  const { counts, items, resetCounts, restoreItems } = useContext(ItemContext);

  const totItems = counts.filter((count) => count > 0).length;

  return (
    <div>
      <h2>Total different Items: {totItems}</h2>
      <div>
        <button onClick={resetCounts}>Restart all counts</button>
        <button onClick={restoreItems}>Restore Items</button>
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Keep counters stacked vertically
            alignItems: "center", // Horizontally center items
            justifyContent: "", // Vertically center items
            gap: "20px", // Space between counters
            padding: "20px",
            minHeight: "100vh", // Make sure the div takes up the full height of the screen
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <h3 style={{ margin: 0, minWidth: "100px", textAlign: "right" }}>
                {item.name}
              </h3>
              {/* Pass the index to each Counter */}
              <Counter index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterArray;

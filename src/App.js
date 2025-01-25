import "./styles.css";
import CounterArray from "./CounterArray";
import { CounterProvider } from "./CounterContext";

import imagen from "./carnitasLibertad.png";

export default function App() {
  return (
    <div className="App">
      <h1>Carnitas y Tortería "Libertad"</h1>
      <img src={imagen} alt="carnitasLibertad.jpg" />
      <CounterProvider>
        <CounterArray />
      </CounterProvider>
    </div>
  );
}

import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hero />
      <Projects />
    </div>
  );
}

export default App;

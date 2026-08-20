// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-center p-4 rounded-2xl mb-5">
        Tailwind Test
      </h1>

      <Card username="Rohit" btnText="click me"/>
      <Card username="Ravi" btnText="visite me"/>
      <Card username="Rahul" btnText="click me"/>



    </>
  );
}

export default App;

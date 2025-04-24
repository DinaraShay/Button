import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Text />
    </div>
  );
}

function Button() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClickMinus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={handleClick}>+ 1</button>
      <button onClick={handleClickMinus}>- 1</button>
      <p>{count}</p>
    </div>
  );
}

function Text() {
  const [text, setText] = useState(null);
  const handleText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleText} />
      <button>Кнопка</button>
      <p>{text}</p>
    </div>
  );
}

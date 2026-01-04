import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container">
        <div className="div-body">
          <div className="div-count">{count}</div>
          <div>
            <button className="btn-minus" onClick={handleMinus}>
              -
            </button>
            <button className="btn-plus" onClick={handlePlus}>
              +
            </button>
          </div>
          <div>
            <button className="btn-reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <div className="footer-text"> Made with ❤️ using React</div>
      </div>
    </>
  );
}

export default App;

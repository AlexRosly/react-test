import "./App.css";
import { Button } from "./components/Button/Button";
import { Message } from "./components/Message/Message";
import { Modal } from "./components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.isActive);

  const handleBtn = () => {
    setTimeout(() => {
      dispatch({ type: "PRESS_BNT", payload: true });
    }, 500);
  };

  const handleMouseOver = () => {
    setTimeout(() => {
      dispatch({ type: "MOUSE_OVER", payload: true });
    }, 500);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      dispatch({ type: "MOUSE_LEAVE", payload: false });
    }, 1000);
  };

  return (
    <div className="App-container">
      <Modal />
      <div className="wrapper">
        <Message isActive={isActive} />
        <Button
          onClick={handleBtn}
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
        />
      </div>
    </div>
  );
}

export default App;

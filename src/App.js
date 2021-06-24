import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>PLUS MINUS</h1>
        <button onClick={() => dispatch(decNumber())} type="submit">
          <span>-</span>
        </button>
        <input name="quantity" type="text" value={myState}></input>
        <button onClick={() => dispatch(incNumber())} type="submit">
          <span>+</span>
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default App;

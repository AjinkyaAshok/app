import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, mulNumber, divNumber } from "./actions/index";
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const myState1 = useSelector((state) => state.changeTheMul);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>INCREMENT/DECREMENT</h1>
        <button onClick={() => dispatch(decNumber())} type="submit">
          <span>-</span>
        </button>
        <input name="quantity" type="text" value={myState}></input>
        <button onClick={() => dispatch(incNumber())} type="submit">
          <span>+</span>
        </button>
      </div>

      <div>
        {" "}
        <h1>MULTIPLICATION/DIVI</h1>
        <button onClick={() => dispatch(divNumber())} type="submit">
          <span>/</span>
        </button>
        <input name="quantity" type="text" value={myState1}></input>
        <button onClick={() => dispatch(mulNumber())} type="submit">
          <span>*</span>
        </button>
      </div>
    </div>
  );
}

export default App;

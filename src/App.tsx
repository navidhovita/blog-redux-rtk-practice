import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/slices/counterSlice";
import { RootState, AppDispatch } from "./store";

function App() {
  const value = useSelector<RootState>(state => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div
      style={{
        margin: "30px"
      }}
    >
      <div>
          {value}
      </div>
      <button
        onClick={() => { dispatch(increment()) }}
      >
        +
      </button>
      <button
        onClick={() => { dispatch(decrement()) }}
      >
        -
      </button>
    </div>
  )
}

export default App

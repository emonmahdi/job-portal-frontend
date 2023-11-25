import { useAppDispatch, useAppSelector } from "../../hooks";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{
            padding: "10px 20px",
            border: "2px solid #000",
          }}
        >
          Increment
        </button>
        <span
          style={{
            padding: "10px 20px",
          }}
        >
          {count}
        </span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{
            padding: "10px 20px",
            border: "2px solid #000",
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

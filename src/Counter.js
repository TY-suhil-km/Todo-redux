import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispach = useDispatch();
  const counter = useSelector((state) => state.count);

  const handleIncrement = () => {
    dispach({ type: "inc" });
  };

  const handleDecrement = () => {
    dispach({ type: "dec" });
  };
  return (
    <div>
      counter
      <div> count : {counter}</div>
      <div onClick={handleIncrement}>Add</div>
      <div onClick={handleDecrement}>Subtract</div>
    </div>
  );
};
export default Counter;

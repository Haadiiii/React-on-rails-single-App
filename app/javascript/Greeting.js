import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreetings } from "./redux/reducer";

const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, []);
  return (
    <div>
      <h1>{greetings.name}</h1>
    </div>
  );
};

export default Greeting;

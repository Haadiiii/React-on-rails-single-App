import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreetings } from "./redux/reducer";

export const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return (
    <div>
      {greetings.map((greeting) => {
        return (
          <div key={greeting.id}>
            <h1>{greeting.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

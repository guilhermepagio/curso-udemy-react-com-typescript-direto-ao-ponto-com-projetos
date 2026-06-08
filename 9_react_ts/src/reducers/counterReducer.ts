import type { CounterAction } from "../types/action";

export const counterReducer = (
  state: number,
  action: CounterAction,
): number => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

export type { CounterAction };

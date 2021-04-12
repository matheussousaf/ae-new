import { useCallback, useEffect, useRef, useState } from "react";
import Animated from "react-native-reanimated";

const { Value } = Animated;

/**
 * Repeats a given string "text" for "times" times given.
 * @param text
 * @param times
 * @returns Repeated string
 */
export function repeat(text: string, times: number): string {
  let newString = "";
  for (let i = 0; i < times; i++) {
    newString += text;
  }

  return newString;
}

export const useValue = (amount: number) => new Value(amount);

export const useStateWithPromise = (initialState) => {
  const [state, setState] = useState(initialState);
  const resolverRef = useRef(null);

  useEffect(() => {
    if (resolverRef.current) {
      resolverRef.current(state);
      resolverRef.current = null;
    }
  }, [resolverRef.current, state]);

  const handleSetState = useCallback(
    (stateAction) => {
      setState(stateAction);
      return new Promise((resolve) => {
        resolverRef.current = resolve;
      });
    },
    [setState]
  );

  return [state, handleSetState];
};

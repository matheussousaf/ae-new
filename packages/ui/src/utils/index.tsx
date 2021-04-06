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

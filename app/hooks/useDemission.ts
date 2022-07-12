import { Dimensions } from "react-native"

type types = "window" | "screen"

export const useDimensions = (types: types) => {
  const { width, height } = Dimensions.get(types)
  return { width, height }
}

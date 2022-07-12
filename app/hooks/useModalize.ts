import { useRef } from "react"
import { Modalize } from "react-native-modalize"

export const useModalize = () => {
  const ref = useRef<Modalize>(null)
  const open = () => {
    if (!ref.current) return false
    ref.current?.open()
  }
  const close = () => {
    if (!ref.current) return false
    ref.current?.close()
  }
  return { ref , open , close }
}

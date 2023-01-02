import { atom, useAtom } from "jotai"

const MessageAtom = atom('Hello!')

export default function useMessage() {
  return useAtom(MessageAtom)
}

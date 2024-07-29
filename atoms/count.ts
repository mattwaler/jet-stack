import { atom, useAtom } from 'jotai'

export const countAtom = atom(0)
const useCountAtom = () => useAtom(countAtom)

export default useCountAtom

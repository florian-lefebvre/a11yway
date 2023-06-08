import { type WritableAtom } from 'nanostores'
import { useStore } from '@nanostores/react'

export function useAtom<T>(atom: WritableAtom<T>) {
    const getter = useStore(atom)
    const setter = atom.set

    return [getter, setter] as const
}

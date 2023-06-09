import { type WritableAtom } from 'nanostores'
import { useStore } from '@nanostores/react'
import { nanoid } from 'nanoid'
import { useRef } from 'react'

export function useAtom<T>(atom: WritableAtom<T>) {
    const getter = useStore(atom)
    const setter = atom.set

    return [getter, setter] as const
}

export function useNanoid() {
    const idRef = useRef<string>()
    idRef.current ||= nanoid(10)
    return idRef.current
}

import React from 'react'
import { $slideoverOpenAtom } from './stores'
import { useAtom } from './hooks'
import { CogIcon } from '@heroicons/react/24/solid'

export default function Toggle() {
    const [open, setOpen] = useAtom($slideoverOpenAtom)

    return (
        <button
            type="button"
            className="fixed top-20 z-[9998] right-0 font-sans items-center inline-block hover:bg-[--a11yway-toggle-bg-hover-color] transition bg-[--a11yway-toggle-bg-color] text-[--a11yway-toggle-text-color] p-2 rounded-l-lg rounded-r-none focus:outline-none border-2 border-transparent focus-visible:border-[--a11yway-toggle-border-focus-color]"
            onClick={() => setOpen(!open)}
        >
            <CogIcon className="h-6 w-6" />
            <span className="sr-only">Accessibility options</span>
        </button>
    )
}

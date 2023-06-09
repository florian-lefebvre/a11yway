import React from 'react'
import { $slideoverOpenAtom } from './stores'
import { useAtom } from './hooks'
import CSSReset from './CSSReset'
import Style from './Style'
import { RadixIconsAccessibility } from './icons'

export default function Toggle() {
    const [open, setOpen] = useAtom($slideoverOpenAtom)

    return (
        <CSSReset>
            <Style styles={`@unocss-placeholder`} />
            <button
                type="button"
                className="fixed right-0 top-20 z-[9998] inline-block items-center rounded-l-lg rounded-r-none border-2 border-transparent bg-[--a11yway-toggle-bg-color] p-2 font-sans text-[--a11yway-toggle-text-color] transition hover:bg-[--a11yway-toggle-bg-hover-color] focus-visible:border-[--a11yway-toggle-border-focus-color] focus-visible:outline-none"
                onClick={() => setOpen(!open)}
            >
                <RadixIconsAccessibility className="h-6 w-6" />
                <span className="sr-only">Accessibility settings</span>
            </button>
        </CSSReset>
    )
}

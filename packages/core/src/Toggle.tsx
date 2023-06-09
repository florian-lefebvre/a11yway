import React from 'react'
import { $slideoverOpenAtom } from './stores'
import { useAtom } from './hooks'
import { CogIcon } from '@heroicons/react/24/solid'
// @ts-expect-error
import cssReset from '@unocss/reset/tailwind.css?raw'

const styles = cssReset + `@unocss-placeholder`

export default function Toggle() {
    const [open, setOpen] = useAtom($slideoverOpenAtom)

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }}></style>
            <div style={{ all: 'initial' }}>
                <button
                    type="button"
                    className="fixed right-0 top-20 z-[9998] inline-block items-center rounded-l-lg rounded-r-none border-2 border-transparent bg-[--a11yway-toggle-bg-color] p-2 font-sans text-[--a11yway-toggle-text-color] transition hover:bg-[--a11yway-toggle-bg-hover-color] focus:outline-none focus-visible:border-[--a11yway-toggle-border-focus-color]"
                    onClick={() => setOpen(!open)}
                >
                    <CogIcon className="h-6 w-6" />
                    <span className="sr-only">Accessibility options</span>
                </button>
            </div>
        </>
    )
}

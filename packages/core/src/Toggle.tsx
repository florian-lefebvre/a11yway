import React from 'react'
import { $slideoverOpenAtom } from './stores'
import StyleReset from './StyleReset'
import { useAtom } from './hooks'

export default function Toggle() {
    const [open, setOpen] = useAtom($slideoverOpenAtom)

    return (
        <StyleReset>
            <div
                style={{ display: 'contents' }}
                className="web-toggle-class"
                onClick={() => setOpen(!open)}
            >
                Toggle: {JSON.stringify(open)}
            </div>
        </StyleReset>
    )
}

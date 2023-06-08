import React from 'react'
import { $slideoverOpenAtom } from './stores'
import StyleReset from './StyleReset'
import { useAtom } from './hooks'

export default function HelloWorld({ name = 'world' }: { name?: string }) {
    const [open] = useAtom($slideoverOpenAtom)

    return (
        <StyleReset>
            <div style={{ color: 'white' }}>
                Hello {name} ({JSON.stringify(open)})
            </div>
        </StyleReset>
    )
}

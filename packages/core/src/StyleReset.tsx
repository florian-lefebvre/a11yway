import React from 'react'

export default function StyleReset({
    children,
}: {
    children: React.ReactNode
}) {
    return <div style={{ all: 'initial' }}>{children}</div>
}

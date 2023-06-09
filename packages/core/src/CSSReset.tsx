import React from 'react'
// @ts-expect-error
import _cssReset from '@unocss/reset/tailwind.css?raw'
import Style from './Style'

const cssReset: string = _cssReset

export default function CSSReset({
    children,
    parentSelector,
}: {
    children: React.ReactNode
    parentSelector?: string
}) {
    return (
        <div style={{ all: 'initial' }}>
            <Style styles={cssReset} parentSelector={parentSelector} />
            {children}
        </div>
    )
}

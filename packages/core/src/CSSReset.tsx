import React from 'react'
// @ts-expect-error
import cssReset from '@unocss/reset/tailwind.css?raw'
import Style from './Style'

export default function CSSReset({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ all: 'initial' }}>
            <Style styles={cssReset} />
            {children}
        </div>
    )
}

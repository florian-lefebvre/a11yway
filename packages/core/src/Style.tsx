import React from 'react'
import postcss from 'postcss'
import postcssNested from 'postcss-nested'

function processCSS(styles: string) {
    return postcss([postcssNested]).process(styles, {
        from: 'undefined',
    }).css
}

export default function Style({
    styles,
    parentSelector,
}: {
    styles: string
    parentSelector?: string
}) {
    const css = parentSelector
        ? processCSS(`${parentSelector} { ${styles} }`)
        : styles
    return <style dangerouslySetInnerHTML={{ __html: css }}></style>
}

import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'
import React from 'react'
import { renderToString } from 'react-dom/server'

export const $slideoverOpenAtom = atom(false)

export type Config = {
    dyslexia: boolean
    daltonism:
        | false
        | 'protanopia'
        | 'deuteranopia'
        | 'tritanopia'
        | 'monochromacy'
        | 'enchance-red'
        | 'enchance-green'
    fontSize: -2 | -1 | false | 1 | 2
    linksHighlight: boolean
}

export const DEFAULT_CONFIG = {
    dyslexia: false,
    daltonism: false,
    fontSize: false,
    linksHighlight: false,
} satisfies Config

export const $configAtom = persistentAtom<Config>(
    'a11yway:config',
    DEFAULT_CONFIG,
    {
        encode: JSON.stringify,
        decode: JSON.parse,
    }
)

const LINKS_HIGHLIGHT_STYLE_ID = 'a11yway-links-highlight'

$configAtom.subscribe((config) => {
    // TODO: Handle daltonism
    switch (config.daltonism) {
        case false:
            break
        case 'protanopia':
            break
        case 'deuteranopia':
            break
        case 'tritanopia':
            break
        case 'monochromacy':
            break
        case 'enchance-red':
            break
        case 'enchance-green':
            break
    }

    // TODO: Handle dyslexia
    if (config.dyslexia) {
    } else {
    }

    // TODO: Handle fontSize
    switch (config.fontSize) {
        case -2:
            break
        case -1:
            break
        case false:
            break
        case 1:
            break
        case 2:
            break
    }

    // Handle linksHighlight
    if (config.linksHighlight) {
        document.head.insertAdjacentHTML(
            'beforeend',
            renderToString(
                <style id={LINKS_HIGHLIGHT_STYLE_ID}>
                    {`
                a {
                    background: none!important;
                    background-color: yellow!important;
                    color: blue!important;
                    box-shadow: -5px 5px 2px #FFFF50!important;
                    border: yellow 3px solid!important;
                }
                `}
                </style>
            )
        )
        renderToString
    } else {
        document.getElementById(LINKS_HIGHLIGHT_STYLE_ID)?.remove()
    }
})

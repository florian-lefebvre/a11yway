import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

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

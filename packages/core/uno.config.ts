import { defineConfig, presetWind, presetWebFonts } from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
    presets: [
        presetWind(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: ['Inter:100,200,300,400,500,600,700,800,900'],
            },
        }),
        // presetForms(),
    ],
})

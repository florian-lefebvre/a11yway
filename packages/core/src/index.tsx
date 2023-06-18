import r2wc from '@r2wc/react-to-web-component'
import Toggle from './Toggle'
import Menu from './Menu'

const WebToggle = r2wc(Toggle, { shadow: 'open' })
customElements.define('a11yway-toggle', WebToggle)

const WebMenu = r2wc(Menu, { shadow: 'open' })
customElements.define('a11yway-menu', WebMenu)

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'a11yway-toggle': {}
            'a11yway-menu': {}
        }
    }
}

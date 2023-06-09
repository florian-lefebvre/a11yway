import r2wc from '@r2wc/react-to-web-component'
import Menu from './Menu'
import Toggle from './Toggle'

const WebMenu = r2wc(Menu, { props: { name: 'string' } })
customElements.define('a11yway-menu', WebMenu)

const WebToggle = r2wc(Toggle, { shadow: 'open' })
customElements.define('a11yway-toggle', WebToggle)

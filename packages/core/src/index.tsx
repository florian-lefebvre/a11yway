import r2wc from '@r2wc/react-to-web-component'
import HelloWorld from './HelloWorld'
import Toggle from './Toggle'

const WebHelloWorld = r2wc(HelloWorld, { props: { name: 'string' } })
customElements.define('web-hello-world', WebHelloWorld)

const WebToggle = r2wc(Toggle)
customElements.define('web-toggle', WebToggle)

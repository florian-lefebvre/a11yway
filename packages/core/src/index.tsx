import React from 'react'
import r2wc from '@r2wc/react-to-web-component'

function HelloWorld() {
    return <div>Hello world</div>
}

const WebHelloWorld = r2wc(HelloWorld)

customElements.define('web-hello-world', WebHelloWorld)

import React from 'react'
import r2wc from '@r2wc/react-to-web-component'

function HelloWorld({ name = 'world' }: { name?: string }) {
    return <div>Hello {name}</div>
}

const WebHelloWorld = r2wc(HelloWorld, { props: { name: 'string' } })

customElements.define('web-hello-world', WebHelloWorld)

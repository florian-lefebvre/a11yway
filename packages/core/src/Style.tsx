import React from 'react'

export default function Style({ styles }: { styles: string }) {
    return <style dangerouslySetInnerHTML={{ __html: styles }}></style>
}

import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { SVGProps } from 'react'

export type Icon =
    | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
    | typeof AcademicCapIcon

export type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}

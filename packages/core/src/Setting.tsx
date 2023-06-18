import React from 'react'
import { Switch, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Style from './Style'
import { useNanoid } from './hooks'
export default function Setting() {}

export type SettingSwitchProps = {
    title: string
    description: string
    checked: boolean
    setChecked: (value: boolean) => void
}

function SettingSwitch({
    title,
    description,
    checked,
    setChecked,
}: SettingSwitchProps) {
    const id = useNanoid()
    return (
        <div id={id} className="contents">
            <Style styles={`@unocss-placeholder`} parentSelector={`#${id}`} />
            <Switch.Group
                as="div"
                className="flex items-center space-x-2 px-4 py-6 hover:bg-indigo-500/10 sm:px-6"
            >
                <Switch.Label as="div" className="flex-1">
                    <div className="font-bold text-gray-50">{title}</div>
                    <div className="text-sm text-gray-400">{description}</div>
                </Switch.Label>
                <Switch
                    checked={checked}
                    onChange={setChecked}
                    className={clsx(
                        checked ? 'bg-indigo-500' : 'bg-gray-800',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent ring-transparent ring-offset-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                    )}
                >
                    <span
                        className={clsx(
                            checked
                                ? 'translate-x-5 bg-white'
                                : 'translate-x-0 bg-gray-200',
                            'pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out'
                        )}
                    >
                        <span
                            className={clsx(
                                checked
                                    ? 'opacity-0 duration-100 ease-out'
                                    : 'opacity-100 duration-200 ease-in',
                                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                            )}
                            aria-hidden="true"
                        >
                            <svg
                                className="h-3 w-3 text-gray-400"
                                fill="none"
                                viewBox="0 0 12 12"
                            >
                                <path
                                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <span
                            className={clsx(
                                checked
                                    ? 'opacity-100 duration-200 ease-in'
                                    : 'opacity-0 duration-100 ease-out',
                                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                            )}
                            aria-hidden="true"
                        >
                            <svg
                                className="h-3 w-3 text-indigo-600"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                            </svg>
                        </span>
                    </span>
                </Switch>
            </Switch.Group>
        </div>
    )
}

Setting.Switch = SettingSwitch

export type SettingDisclosureProps = {
    show: boolean
    header: React.ReactNode
    children: React.ReactNode
}

function SettingDisclosure({ show, header, children }: SettingDisclosureProps) {
    return (
        <div>
            <div>{header}</div>
            <Transition
                show={show}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <div>{children}</div>
            </Transition>
        </div>
    )
}

Setting.Disclosure = SettingDisclosure

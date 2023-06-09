import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAtom } from './hooks'
import { $slideoverOpenAtom } from './stores'
import CSSReset from './CSSReset'
import Style from './Style'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Menu() {
    const [open, setOpen] = useAtom($slideoverOpenAtom)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-[9999]" onClose={setOpen}>
                <CSSReset parentSelector="#headlessui-portal-root">
                    <Style
                        styles={`@unocss-placeholder`}
                        parentSelector="#headlessui-portal-root"
                    />
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden font-sans">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-300"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-300"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md [color-scheme:dark]">
                                        <div className="flex h-full flex-col overflow-y-scroll border-l border-l-gray-600 bg-gray-700 shadow-xl">
                                            <div className="bg-gray-800 px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <Dialog.Title className="text-2xl font-bold leading-6 text-gray-50">
                                                            Accessibility
                                                            settings
                                                        </Dialog.Title>
                                                        <p className="text-base text-gray-400">
                                                            Powered by A11yway
                                                        </p>
                                                    </div>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="rounded-md bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-700"
                                                            onClick={() =>
                                                                setOpen(false)
                                                            }
                                                        >
                                                            <span className="sr-only">
                                                                Close panel
                                                            </span>
                                                            <XMarkIcon
                                                                className="h-6 w-6"
                                                                aria-hidden="true"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                {/* Your content */}
                                            </div>
                                            <div className="bg-gray-800 px-4 py-6 text-gray-400 sm:px-6">
                                                Made by Florian Lefebvre. MIT.
                                                GitHub
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </CSSReset>
            </Dialog>
        </Transition.Root>
    )
}

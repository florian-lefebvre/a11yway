import * as Ariakit from '@ariakit/react'
import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { Fragment } from 'react'
import CSSReset from './CSSReset'
import Setting from './Setting'
import Style from './Style'
import { useAtom } from './hooks'
import { $configAtom, $slideoverOpenAtom } from './stores'

export default function Menu() {
    const [open, setOpen] = useAtom($slideoverOpenAtom)
    const [config, setConfig] = useAtom($configAtom)
    const dialog = Ariakit.useDialogStore({ open, setOpen })

    return (
        <CSSReset>
            <Style styles={`@unocss-placeholder`} />
            <Transition.Root show={open} as={Fragment}>
                <div className="relative z-[9999]">
                    {/* <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
                    </Transition.Child> */}
                    <div className="fixed inset-0 overflow-hidden font-sans">
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
                                <Ariakit.Dialog
                                    store={dialog}
                                    portal={false}
                                    preventBodyScroll={true}
                                    backdrop={
                                        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
                                    }
                                    className="pointer-events-auto w-screen max-w-md [color-scheme:dark]"
                                >
                                    <div className="flex h-full flex-col border-l border-l-gray-600 bg-gray-700 shadow-xl">
                                        <div className="bg-gray-800 px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Ariakit.DialogHeading className="text-2xl font-bold leading-6 text-gray-50">
                                                    Accessibility settings
                                                </Ariakit.DialogHeading>
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
                                        <div className="relative flex flex-1 flex-col divide-y divide-gray-600 overflow-y-auto">
                                            <Setting.Switch
                                                title="Dyslexia"
                                                description="Improves reading for dyslexics by changing fonts"
                                                checked={config.dyslexia}
                                                setChecked={(v) =>
                                                    setConfig({
                                                        ...config,
                                                        dyslexia: v,
                                                    })
                                                }
                                            />
                                            <Setting.Switch
                                                title="Links highlight"
                                                description="Improves navigation by highlighting links"
                                                checked={config.linksHighlight}
                                                setChecked={(v) =>
                                                    setConfig({
                                                        ...config,
                                                        linksHighlight: v,
                                                    })
                                                }
                                            />
                                            <Setting.Switch
                                                title="Font size"
                                                description="Lorem ipsum"
                                                checked={config.linksHighlight}
                                                setChecked={(v) =>
                                                    setConfig({
                                                        ...config,
                                                        linksHighlight: v,
                                                    })
                                                }
                                            />
                                            <Setting.Disclosure
                                                header={
                                                    <Setting.Switch
                                                        title="Daltonism"
                                                        description="Lorem ipsum"
                                                        checked={
                                                            config.linksHighlight
                                                        }
                                                        setChecked={(v) =>
                                                            setConfig({
                                                                ...config,
                                                                linksHighlight:
                                                                    v,
                                                            })
                                                        }
                                                    />
                                                }
                                                show={config.linksHighlight}
                                            >
                                                MORE CHOICES
                                            </Setting.Disclosure>

                                            <div className="mt-auto bg-gray-800 px-4 py-6 text-gray-400 sm:px-6">
                                                Powered by A11yway. GitHub
                                            </div>
                                        </div>
                                    </div>
                                </Ariakit.Dialog>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Transition.Root>
        </CSSReset>
    )
    // return (
    //     <Transition.Root show={open} as={Fragment}>
    //         <Dialog as="div" className="relative z-[9999]" onClose={setOpen}>
    //             <CSSReset parentSelector="#headlessui-portal-root">
    //                 <Style
    //                     styles={`@unocss-placeholder`}
    //                     parentSelector="#headlessui-portal-root"
    //                 />
    //                 <Transition.Child
    //                     as={Fragment}
    //                     enter="ease-in-out duration-300"
    //                     enterFrom="opacity-0"
    //                     enterTo="opacity-100"
    //                     leave="ease-in-out duration-300"
    //                     leaveFrom="opacity-100"
    //                     leaveTo="opacity-0"
    //                 >
    //                     <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
    //                 </Transition.Child>
    //                 <div className="fixed inset-0 overflow-hidden font-sans">
    //                     <div className="absolute inset-0 overflow-hidden">
    //                         <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
    //                             <Transition.Child
    //                                 as={Fragment}
    //                                 enter="transform transition ease-in-out duration-300"
    //                                 enterFrom="translate-x-full"
    //                                 enterTo="translate-x-0"
    //                                 leave="transform transition ease-in-out duration-300"
    //                                 leaveFrom="translate-x-0"
    //                                 leaveTo="translate-x-full"
    //                             >
    //                                 <Dialog.Panel className="pointer-events-auto w-screen max-w-md [color-scheme:dark]">
    //                                     <div className="flex h-full flex-col border-l border-l-gray-600 bg-gray-700 shadow-xl">
    //                                         <div className="bg-gray-800 px-4 py-6 sm:px-6">
    //                                             <div className="flex items-start justify-between">
    //                                                 <Dialog.Title className="text-2xl font-bold leading-6 text-gray-50">
    //                                                     Accessibility settings
    //                                                 </Dialog.Title>
    //                                                 <div className="ml-3 flex h-7 items-center">
    //                                                     <button
    //                                                         type="button"
    //                                                         className="rounded-md bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-700"
    //                                                         onClick={() =>
    //                                                             setOpen(false)
    //                                                         }
    //                                                     >
    //                                                         <span className="sr-only">
    //                                                             Close panel
    //                                                         </span>
    //                                                         <XMarkIcon
    //                                                             className="h-6 w-6"
    //                                                             aria-hidden="true"
    //                                                         />
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div className="relative flex flex-1 flex-col divide-y divide-gray-600 overflow-y-auto">
    //                                             <Setting.Switch
    //                                                 title="Dyslexia"
    //                                                 description="Improves reading for dyslexics by changing fonts"
    //                                                 checked={config.dyslexia}
    //                                                 setChecked={(v) =>
    //                                                     setConfig({
    //                                                         ...config,
    //                                                         dyslexia: v,
    //                                                     })
    //                                                 }
    //                                             />
    //                                             <Setting.Switch
    //                                                 title="Links highlight"
    //                                                 description="Improves navigation by highlighting links"
    //                                                 checked={
    //                                                     config.linksHighlight
    //                                                 }
    //                                                 setChecked={(v) =>
    //                                                     setConfig({
    //                                                         ...config,
    //                                                         linksHighlight: v,
    //                                                     })
    //                                                 }
    //                                             />
    //                                             <Setting.Switch
    //                                                 title="Font size"
    //                                                 description="Lorem ipsum"
    //                                                 checked={
    //                                                     config.linksHighlight
    //                                                 }
    //                                                 setChecked={(v) =>
    //                                                     setConfig({
    //                                                         ...config,
    //                                                         linksHighlight: v,
    //                                                     })
    //                                                 }
    //                                             />
    //                                             <Setting.Disclosure
    //                                                 header={
    //                                                     <Setting.Switch
    //                                                         title="Daltonism"
    //                                                         description="Lorem ipsum"
    //                                                         checked={
    //                                                             config.linksHighlight
    //                                                         }
    //                                                         setChecked={(v) =>
    //                                                             setConfig({
    //                                                                 ...config,
    //                                                                 linksHighlight:
    //                                                                     v,
    //                                                             })
    //                                                         }
    //                                                     />
    //                                                 }
    //                                                 show={config.linksHighlight}
    //                                             >
    //                                                 MORE CHOICES
    //                                             </Setting.Disclosure>

    //                                             <div className="mt-auto bg-gray-800 px-4 py-6 text-gray-400 sm:px-6">
    //                                                 Powered by A11yway. GitHub
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </Dialog.Panel>
    //                             </Transition.Child>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </CSSReset>
    //         </Dialog>
    //     </Transition.Root>
    // )
}

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface DeleteConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
}

export default function DeleteConfirm({ isOpen, onClose, onConfirm, title, message }: DeleteConfirmProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[999]" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white border border-indigo-200 p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-semibold text-gray-900"
                                >
                                    {title}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-600">
                                        {message}
                                    </p>
                                </div>

                                <div className="mt-6 flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        className="rounded-full border border-indigo-200 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50 focus:outline-none"
                                        onClick={onClose}
                                    >
                                        បោះបង់
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-full bg-indigo-600 border border-indigo-600 px-4 py-2 text-sm font-medium text-white focus:outline-none hover:bg-indigo-700"
                                        onClick={() => {
                                            onConfirm();
                                            onClose();
                                        }}
                                    >
                                        លុប
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
} 
'use client'
import { FunctionSquare, Maximize2, X } from "lucide-react";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Graph from "@/components/helper/Graph";
import { GraphBoxProps, Expression } from "@core-types/docs/boxProps";
import { CalculatorOptions } from "desmos";

export function GraphBox({ expressions, options }: GraphBoxProps) {
    // Type assertion for desmos options (web-specific)
    const desmosOptions = options as Partial<CalculatorOptions> | undefined;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-indigo-50/80 dark:bg-indigo-900/40 border border-indigo-600 dark:border-indigo-500 my-6 rounded-3xl p-4 shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="relative group bg-white dark:bg-zinc-900 rounded-3xl">
                    <Graph expressions={expressions} options={desmosOptions} />
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="absolute -top-2 -right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200"
                    >
                        <Maximize2 size={16} />
                    </button>
                </div>
            </div>

            {/* Fullscreen Modal */}
            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setIsModalOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/80 dark:bg-zinc-900/80 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-6xl transform overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 text-left align-middle shadow-xl transition-all">
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsModalOpen(false)}
                                            className="absolute top-4 right-4 z-10 bg-black/50 dark:bg-zinc-900/50 hover:bg-black/70 dark:hover:bg-zinc-900/70 text-white p-2 rounded-full transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                        <div className="h-[80vh]">
                                            <Graph expressions={expressions} options={desmosOptions} />
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
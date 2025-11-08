'use client'

import { Box, Maximize2, X } from 'lucide-react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ThreeD } from '@/components/helper/ThreeD'
import { ThreeDExplanationBoxProps } from "@core-types/docs/boxProps";

export const ThreeDExplanationBox = ({
    src,
    explanation,
    scale = 0.7,
    target = [0, 0, 0],
    canvasBackground,
    canvasBackgroundColor = 'grey',
    threeDText,
    twoDText,
    height = 400,
    title = "ការពន្យល់"
}: ThreeDExplanationBoxProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCloseModal = () => {
        window.location.reload()
    }

    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2 my-6'>
                <div className="bg-indigo-50/80 border border-indigo-600 p-4 rounded-3xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="w-full relative group bg-white rounded-3xl">
                            <ThreeD
                                src={src}
                                scale={scale}
                                target={target}
                                canvasBackground={canvasBackground}
                                canvasBackgroundColor={canvasBackgroundColor}
                                threeDText={threeDText}
                                twoDText={twoDText}
                                height={height}
                            />
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="absolute -top-2 -right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200"
                            >
                                <Maximize2 size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="lg:hidden flex flex-col my-6 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <Box size={20} className='text-indigo-600' />
                            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                        </div>
                        {explanation}
                    </div>
                </div>
                <div className="hidden lg:flex bg-indigo-50/80 border border-indigo-600 p-6 rounded-3xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="w-full">
                            <div className="flex items-center gap-3 mb-4">
                                <Box size={20} className='text-indigo-600' />
                                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                            </div>
                            {explanation}
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Modal */}
            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={handleCloseModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
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
                                <Dialog.Panel className="relative w-full max-w-6xl transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-xl transition-all">
                                    <div className="relative">
                                        <button
                                            onClick={handleCloseModal}
                                            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                        <div className="h-[80vh] flex flex-col justify-center items-center p-4">
                                            <div className="w-full h-full">
                                                <ThreeD
                                                    src={src}
                                                    scale={scale * 1.2}
                                                    target={target}
                                                    canvasBackground={canvasBackground}
                                                    canvasBackgroundColor={canvasBackgroundColor}
                                                    threeDText={threeDText}
                                                    twoDText={twoDText}
                                                    height={600}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
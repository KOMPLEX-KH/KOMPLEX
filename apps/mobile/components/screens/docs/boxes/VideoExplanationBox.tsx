'use client'

import BulletList from '@/components/helper/BulletList';
import { VideoPlayer } from '@/components/helper/VideoPlayer';
import { Video, Maximize2, X } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export interface VideoBoxProps {
    src?: string;
    videoTitle?: string;
    explanation: string | string[] | React.ReactNode;
}

export const VideoBox = ({ src, videoTitle, explanation }: VideoBoxProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2 my-6'>
                <div className="bg-indigo-50/80 border border-indigo-600 p-6 rounded-3xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="w-full relative group">
                            {src ? (
                                <>
                                    <VideoPlayer
                                        src={src}
                                        poster="/angkor.jpg"
                                        className="rounded-lg shadow-md h-auto w-full"
                                    />
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200"
                                    >
                                        <Maximize2 size={16} />
                                    </button>
                                </>
                            ) : (
                                <div className="w-full h-64 bg-gray-200 rounded-xl shadow-md flex items-center justify-center">
                                    <div className="text-center">
                                        <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                        <p className="text-gray-500">{videoTitle || 'Video content will be displayed here'}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="lg:hidden flex flex-col my-6 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <Video size={20} className='text-indigo-600' />
                            <h3 className="text-xl font-bold text-gray-900">ការពន្យល់</h3>
                        </div>
                        {typeof explanation === 'string' ? (
                            <p className="text-gray-700 text-base">
                                {explanation}
                            </p>
                        ) : Array.isArray(explanation) ? (
                            <BulletList content={explanation} />
                        ) : (
                            <div className="text-gray-700 text-base">
                                {explanation}
                            </div>
                        )}
                    </div>
                </div>
                <div className="hidden lg:flex bg-indigo-50/80 border border-indigo-600 p-6 rounded-3xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="w-full">
                            <div className="flex items-center gap-3 mb-4">
                                <Video size={20} className='text-indigo-600' />
                                <h3 className="text-xl font-bold text-gray-900">ការពន្យល់</h3>
                            </div>
                            {typeof explanation === 'string' ? (
                                <p className="text-gray-700 leading-relaxed text-base">
                                    {explanation}
                                </p>
                            ) : Array.isArray(explanation) ? (
                                <BulletList content={explanation} />
                            ) : (
                                <div className="text-gray-700 leading-relaxed text-base">
                                    {explanation}
                                </div>
                            )}
                        </div>
                    </div>
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
                                <Dialog.Panel className="relative w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsModalOpen(false)}
                                            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                        {src ? (
                                            <VideoPlayer
                                                src={src}
                                                poster="/angkor.jpg"
                                                className="w-full h-auto max-h-[80vh] object-contain"
                                            />
                                        ) : (
                                            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                                                <div className="text-center">
                                                    <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                                    <p className="text-gray-500">{videoTitle || 'Video content will be displayed here'}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}; 
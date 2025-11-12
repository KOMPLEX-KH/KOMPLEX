"use client";

import React, { Fragment, useState } from "react";
import { Box, Maximize2, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { ThreeD } from "@/components/helper/ThreeD";
import { ThreeDBoxProps } from "@core-types/docs/boxProps";

export function ThreeDBox({
  src = "/test.glb",
  scale = 0.1,
  target = [0, 0, 0],
  title = "រូបភាព 3D",
  content,
  canvasBackground,
  canvasBackgroundColor,
  threeDText,
  twoDText,
  height = 500,
}: ThreeDBoxProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-indigo-50/80 border border-indigo-600 my-6 rounded-3xl p-4 shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
        {/* 3D Canvas */}
        <div className="relative group bg-white rounded-3xl">
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
            className="absolute -top-2 -right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {/* Content Section */}
        {content && (
          <div className="mt-4">
            {typeof content === "string" ? (
              <div className="leading-relaxed text-base text-gray-700">
                {content}
              </div>
            ) : (
              <div className="leading-relaxed text-base text-gray-700">
                {content}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            window.location.reload();
          }}
        >
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
                      onClick={() => {
                        window.location.reload();
                      }}
                      className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>
                    <div className="h-[80vh] flex flex-col justify-center items-center p-4">
                      <ThreeD
                        src={src}
                        scale={scale}
                        target={target}
                        canvasBackground={canvasBackground}
                        canvasBackgroundColor={canvasBackgroundColor}
                        threeDText={threeDText}
                        twoDText={twoDText}
                        height={600}
                      />
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

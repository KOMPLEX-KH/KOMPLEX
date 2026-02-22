'use client';

import { useRef, useEffect } from 'react';

interface VerifyOtpProps {
    show: boolean;
    onClose: () => void;
    otpCode: string;
    setOtpCode: (code: string) => void;
    otpEmail: string;
    otpAttempts: number;
    isSubmitting: boolean;
    errorMessage: string | null;
    onVerify: () => void;
    onResendOtp: () => void;
}

export default function VerifyOtp({
    show,
    onClose,
    otpCode,
    setOtpCode,
    otpEmail,
    otpAttempts,
    isSubmitting,
    errorMessage,
    onVerify,
    onResendOtp
}: VerifyOtpProps) {
    
    // Refs for each input to manage focus
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    
    // Convert string OTP to array for individual inputs
    const otpArray = otpCode.padEnd(6, '').split('').slice(0, 6);
    

    const handleInputChange = (index: number, value: string) => {
        
        // Handle pasting full OTP
        if (value.length > 1) {

            // Extract only digits and limit to 6 characters
            const pastedCode = value.replace(/\D/g, '').slice(0, 6);
            setOtpCode(pastedCode);
            
            // Focus the last filled input or the last input
            const nextIndex = Math.min(pastedCode.length - 1, 5);
            inputRefs.current[nextIndex]?.focus();
            return;
        }
        
        // Prevents typing letters or multiple digits in a single input.
        if (/^\d?$/.test(value)) {
            const newOtpArray = [...otpArray];
            newOtpArray[index] = value;

            // joint all digit into single string
            const newOtpCode = newOtpArray.join('').replace(/\s/g, '');
            setOtpCode(newOtpCode);
            
            // Move to next input if value entered
            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };
    
    // Handle backspace and arrow navigation
    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace') {
            if (!otpArray[index] && index > 0) {
                // Move to previous input if current is empty
                inputRefs.current[index - 1]?.focus();
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };
    
    // Focus first input when modal opens
    useEffect(() => {
        if (show) {
            setTimeout(() => inputRefs.current[0]?.focus(), 100);
        }
    }, [show]);

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (show) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';          
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [show]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-96 flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                
                <h3 className="text-2xl font-semibold">បញ្ចូលលេខកូដ OTP</h3>
                <p className=" text-sm text-gray-500">
                    យើងបានផ្ញើលេខកូដ 6 ខ្ទង់ទៅ
                </p>

                <p className="text-sm text-indigo-600">{otpEmail}</p>

                {/* Input */}
                <div className="flex gap-2 justify-center">
                    {Array.from({ length: 6 }, (_, index) => (
                        <input
                            key={index}
                            ref={(el) => {
                                inputRefs.current[index] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            value={otpArray[index] || ''}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-12 h-12 border border-indigo-500/20 rounded-lg text-center text-lg font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            maxLength={1}
                            disabled={isSubmitting}
                        />
                    ))}
                </div>

                {errorMessage && (
                    <p className="text-red-500 text-sm text-center">{errorMessage}</p>
                )}

                <p className="text-sm text-gray-400 text-center">
                    ការព្យាយាមនៅសល់: {otpAttempts}
                </p>

                <div className="flex gap-3 w-full">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                        disabled={isSubmitting}
                    >
                        បោះបង់
                    </button>
                    <button
                        onClick={onVerify}
                        disabled={otpCode.length !== 6 || isSubmitting}
                        className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
                    >
                        {isSubmitting ? 'កំពុងផ្ទៀងផ្ទាត់...' : 'ផ្ទៀងផ្ទាត់'}
                    </button>
                </div>

                <div className='flex items-center gap-4 text-sm'>
                    <p className='text-sm'>មិនទាន់ទទួល?</p>
                    <button onClick={onResendOtp} className="text-indigo-600 text-sm  hover:underline">ផ្ញើម្តងទៀត</button>
                </div>
            </div>
        </div>
    );
}
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, FileText, MessageSquare, BookOpen, Bot, Camera, Pencil, LogOut, BookMarked, MessageCircle, UserIcon, CircleEllipsis, CircleChevronDown, RectangleEllipsis, EllipsisVertical } from 'lucide-react';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import FeedbackModal from '../pages/feedbacks/FeedbackModal';
import { useAuth } from '@hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '@/configs/firebase';
import { useEffect, useState, useRef } from 'react';
import { Logo } from './Logo';

const navLinks = [
    {
        label: 'មេរៀន',
        href: `/docs`,
        icon: FileText,
        style: "bg-transparent  hover:text-indigo-600 hover:bg-indigo-50/90 "
    },
    // {
    //     label: 'អនុវត្តន៍',
    //     href: '/exercises',
    //     icon: Pencil,
    //     style: "bg-transparent  hover:text-indigo-600 hover:bg-indigo-50/90 "
    // },
    {
        label: 'ពិភាក្សា',
        href: '/forums',
        icon: MessageSquare,
        style: "bg-transparent  hover:text-indigo-600 hover:bg-indigo-50/90 "
    },
    {
        label: 'អត្ថបទ',
        href: '/blogs',
        icon: BookOpen,
        style: "bg-transparent  hover:text-indigo-600 hover:bg-indigo-50/90 "
    },
    {
        label: 'វីដេអូ',
        href: '/videos',
        icon: Camera,
        style: "bg-transparent  hover:text-indigo-600 hover:bg-indigo-50/90 "
    },
    {
        label: 'តារា',
        href: '/ai',
        icon: Bot,
        style: "bg-indigo-600 text-white no-underline   hover:bg-indigo-500"
    }
]

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const { user, loading } = useAuth();


    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const lastScrollYRef = useRef(0);
    const scrollUpThresholdRef = useRef(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle scroll direction detection for mobile header hiding
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const lastScrollY = lastScrollYRef.current;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down and past initial 50px
                setIsScrollingDown(true);
                scrollUpThresholdRef.current = 0; // Reset threshold
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up - accumulate threshold
                scrollUpThresholdRef.current += (lastScrollY - currentScrollY);

                // Only show when scrolling up by at least 20px
                if (scrollUpThresholdRef.current >= 100 || currentScrollY <= 100) {
                    setIsScrollingDown(false);
                    scrollUpThresholdRef.current = 0; // Reset after showing
                }
            } else if (currentScrollY <= 50) {
                // Near top - always show
                setIsScrollingDown(false);
                scrollUpThresholdRef.current = 0;
            }

            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem("user");
            router.push("/auth");
        } catch (error) {
            console.error('Logout error:', error);
        }
    };


    return (
        <>
            <div className={`bg-white/95 backdrop-blur-md border-b border-indigo-500/10 fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ${isScrollingDown ? 'md:translate-y-0 -translate-y-full' : 'translate-y-0'}`}>
                <div className="max-w-full px-6 py-2 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-decoration-none flex items-center gap-2">
                        <Logo></Logo>
                    </Link>

                    {/* Mobile Menu */}
                    <HeadlessMenu as="div" className="md:hidden relative">
                        <HeadlessMenu.Button className="bg-none border-none focus:outline-none text-2xl  cursor-pointer py-2 rounded-full transition-colors duration-200">
                            <EllipsisVertical size={24} />
                        </HeadlessMenu.Button>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <HeadlessMenu.Items className="absolute -right-5 mt-3 w-50 bg-white/95 rounded-3xl shadow-4xl border border-indigo-500/10  z-50 focus:outline-none p-2">
                                <div className="space-y-1">
                                    {navLinks.map((link) => {
                                        const Icon = link.icon;
                                        // Get the first segment after the domain (e.g., "blogs" from "/blogs" or "me" from "/me/blogs")
                                        const pathSegment = pathname.split("/")[1];
                                        const linkSegment = link.href.split("/")[1];
                                        const isActive = pathSegment === linkSegment;
                                        return (
                                            <HeadlessMenu.Item key={link.href}>
                                                {() => (
                                                    <Link
                                                        href={link.href}
                                                        className={`flex items-center gap-3 bg-transparent w-full text-left px-4 py-3 rounded-full text-sm text-gray-600 no-underline font-medium  transition-all duration-300 ${isActive
                                                            ? 'text-indigo-600   '
                                                            : 'hover:text-indigo-600  bg-transparent'
                                                            }`}
                                                    >
                                                        <Icon size={18} />
                                                        {link.label}
                                                    </Link>
                                                )}
                                            </HeadlessMenu.Item>
                                        );
                                    })}
                                </div>
                                {/* Mobile: User area and actions */}
                                {mounted && !loading && (
                                    <div className="mt-2 p-2">
                                        <div className='h-0.5  my-2'></div>
                                        {user ? (
                                            <>
                                                <Link href={"/me/profile"} className="flex items-center gap-3 px-2 py-2 overflow-hidden">
                                                    {user?.profileImage ? (
                                                        <img
                                                            src={user.profileImage}
                                                            alt="Profile"
                                                            className="w-8 h-8 border border-indigo-500 rounded-full object-cover"
                                                            onError={(e) => {
                                                                e.currentTarget.src = '/image-error.png'
                                                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                            }}
                                                        />
                                                    ) : <div className={`w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm ${user?.profileImage ? 'hidden' : ''}`}>
                                                        {((`${user?.firstName || ''} ${user?.lastName || ''}`.trim()) || user?.username || user?.email || 'U').toUpperCase().charAt(0)}
                                                    </div>}

                                                    <div>
                                                        <div className="text-sm font-semibold text-gray-900">
                                                            {user ? ((`${user.firstName || ''} ${user.lastName || ''}`.trim()) || user.username || 'Unknown') : 'Unknown'}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {user ? (user.email || '') : ''}
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="space-y-1 mt-2">
                                                    <HeadlessMenu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                href="/me"
                                                                className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-full text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? ' text-indigo-600' : ' hover:text-indigo-600'}`}
                                                            >
                                                                <BookMarked className="w-4 h-4" />
                                                                មាតិការបស់ខ្ញុំ
                                                            </Link>
                                                        )}
                                                    </HeadlessMenu.Item>
                                                    <HeadlessMenu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() => setShowFeedbackModal(true)}
                                                                className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-full text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? ' text-indigo-600' : ' hover:text-indigo-600'}`}
                                                            >
                                                                <MessageCircle className="w-4 h-4" />
                                                                ជួយផ្ដល់មតិ
                                                            </button>
                                                        )}
                                                    </HeadlessMenu.Item>
                                                    <HeadlessMenu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={handleLogout}
                                                                className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-full text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? ' text-red-600' : ' hover:text-red-600'}`}
                                                            >
                                                                <LogOut className="w-4 h-4" />
                                                                ចាកចេញ
                                                            </button>
                                                        )}
                                                    </HeadlessMenu.Item>
                                                </div>
                                            </>
                                        ) : pathname === "/auth" ? null : (
                                            <div className="px-2 py-2">
                                                <Link
                                                    href="/auth"
                                                    className="w-full bg-indigo-600 text-white px-4 py-2.5 rounded-full font-semibold text-sm hover:bg-indigo-500 transition-colors duration-300 border border-white/20 flex items-center justify-center gap-2"
                                                >
                                                    <UserIcon />
                                                    ចុះឈ្មោះ
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </HeadlessMenu.Items>
                        </Transition>
                    </HeadlessMenu>

                    {/* Desktop Navigation Menu */}
                    <div className="hidden md:flex gap-1 items-center">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            // Get the first segment after the domain (e.g., "blogs" from "/blogs" or "me" from "/me/blogs")
                            const pathSegment = pathname.split("/")[1];
                            const linkSegment = link.href.split("/")[1];
                            const isActive = pathSegment === linkSegment;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-2 text-gray-600 no-underline font-semibold  text-sm px-3 py-2.5 rounded-full transition-all duration-300 relative ${isActive ? 'text-indigo-600 border border-indigo-500/30 bg-indigo-50/90 shadow-sm ' : link.style}`}
                                >
                                    <Icon size={18} />
                                    {link.label}
                                </Link>
                            );
                        })}

                        {/* User Menu or Sign Up Button */}
                        {pathname === "/auth" ? null : !mounted || loading ? (
                            <div className="ml-2" />
                        ) : user ? (
                            <HeadlessMenu as="div" className="relative ml-2">
                                <HeadlessMenu.Button className="flex items-center gap-2 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none">
                                    {user.profileImage ? (
                                        <img
                                            src={user.profileImage}
                                            alt="Profile"
                                            className="w-8 h-8 border border-indigo-500 rounded-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                    ) : null}
                                    <div className={`w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm ${user.profileImage ? 'hidden' : ''}`}>
                                        {((`${user.firstName || ''} ${user.lastName || ''}`.trim()) || user.username || user.email || 'U').charAt(0)}
                                    </div>
                                </HeadlessMenu.Button>

                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <HeadlessMenu.Items className="absolute  right-0 mt-3 focus:outline-none w-72 bg-white/95 rounded-3xl shadow-2xl border border-gray-200  z-50 p-4">
                                        {/* User Info Section */}
                                        <div className="flex items-center gap-3">
                                            {user.profileImage ? (
                                                <img
                                                    src={user.profileImage}
                                                    alt="Profile"
                                                    className="w-12 h-12 border border-indigo-500 rounded-full object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                            ) : null}
                                            <div className={`w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-lg ${user.profileImage ? 'hidden' : ''}`}>
                                                {((`${user.firstName || ''} ${user.lastName || ''}`.trim()) || user.username || user.email || 'U').charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-sm">
                                                    {((`${user.firstName || ''} ${user.lastName || ''}`.trim()) || user.username || 'User')}
                                                </h3>
                                                <p className="text-gray-500 text-xs">
                                                    {user.email || ''}
                                                </p>
                                            </div>
                                        </div>

                                        <div className='h-0.5  my-2'></div>

                                        {/* Menu Items */}
                                        <div className="space-y-1">
                                            <HeadlessMenu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="/me"
                                                        className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-full text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? 'text-indigo-600' : ' hover:text-indigo-600'}`}
                                                    >
                                                        <BookMarked className="w-4 h-4" />
                                                        មាតិការបស់ខ្ញុំ
                                                    </Link>
                                                )}
                                            </HeadlessMenu.Item>
                                            <HeadlessMenu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() => setShowFeedbackModal(true)}
                                                        className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-full text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? ' text-indigo-600' : ' hover:text-indigo-600'}`}
                                                    >
                                                        <MessageCircle className="w-4 h-4" />
                                                        ជួយផ្ដល់មតិ
                                                    </button>
                                                )}
                                            </HeadlessMenu.Item>

                                            <HeadlessMenu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={handleLogout}
                                                        className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-full text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ${active ? ' text-red-600' : ' hover:text-red-600'}`}
                                                    >
                                                        <LogOut className="w-4 h-4" />
                                                        ចាកចេញ
                                                    </button>
                                                )}
                                            </HeadlessMenu.Item>
                                        </div>
                                    </HeadlessMenu.Items>
                                </Transition>
                            </HeadlessMenu>
                        ) : (
                            <div className="ml-1">
                                <Link
                                    href="/auth"
                                    className="flex items-center gap-2 text-gray-600 no-underline font-semibold  text-sm px-3 py-2.5 rounded-full transition-all duration-300 relative bg-indigo-600 text-white"
                                >
                                    <UserIcon size={16} />
                                    ចុះឈ្មោះ
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <FeedbackModal
                isOpen={showFeedbackModal}
                onClose={() => setShowFeedbackModal(false)}
            />
        </>
    );
}
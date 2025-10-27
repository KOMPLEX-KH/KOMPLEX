'use client';

import AuthModal from '@/components/pages/auth/AuthModal';
import { useAuth } from '@hooks/useAuth';

export default function ModalRoot() {
    const { isLoginOpen, closeLoginModal } = useAuth();
    return <AuthModal open={isLoginOpen} onClose={closeLoginModal} />;
}


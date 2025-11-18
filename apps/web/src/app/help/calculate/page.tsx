'use client';

import Link from 'next/link';
import { ArrowLeft, ChevronLeft } from 'lucide-react';
// import ForumCard from '@/components/pages/forums/ForumCard';
// import ForumSkeleton from '@/components/pages/forums/ForumSkeleton';
import HelpCard from '@/components/pages/helps/HelpCard';
import HelpSkeleton from '@/components/pages/helps/HelpSkeleton';
import ContentError from '@/components/common/ContentError';
import Comments from '@/components/common/comments/Comments';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
// import { ForumPost } from '@/types/content/forums';
// import { feedForumService, meForumService } from '@/services/index';
import { useAuth } from '@hooks/useAuth';
import { BackButton } from '@/components/common/BackButton';


export default function HelpFeature() {
    const params = useParams();
    const id = params.id as string;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user, openLoginModal } = useAuth();
    
}

'use client';

import { MessageCircle, Share, ThumbsUp, Check, LinkIcon, UserPlus, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, Transition } from '@headlessui/react';
import Carousel from '@/components/common/Carousel';
import { Media } from '@/types/content/media';
import { meForumService, meFollowService } from '@/services/index';
import { useAuth } from '@hooks/useAuth';
import MarkDownRenderer from '@/components/helper/MarkDownRenderer';

const HelpCard = () => {
  return (
    <div>
      
    </div>
  )
}

export default HelpCard

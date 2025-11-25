'use client';

import ExploreContent from "@/components/pages/extras/explore/content";
import CalculateContent from "@/components/pages/extras/calculate/content";
import LibraryContent from "@/components/pages/extras/library/content";
import NotesContent from "@/components/pages/extras/notes/content";
import FormularContent from "@/components/pages/extras/formular/content";
import CalendarContent from "@/components/pages/extras/calendar/content";
import NotFound from "../not-found";

interface HelpWrapperProps {
  currentTab: string;
}

export default function ExtraHelper({ currentTab }: HelpWrapperProps) {
    switch(currentTab){
        case 'explore':
            return <ExploreContent />;
        case 'calculate':
            return <CalculateContent />;
        case 'library':
            return <LibraryContent />;
        case 'notes':
            return <NotesContent />;
        case 'formular':
            return <FormularContent />;
        case 'calendar':
            return <CalendarContent />;
        default:
            return <NotFound />;
    }
}
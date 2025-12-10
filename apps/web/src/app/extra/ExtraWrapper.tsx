'use client';

import ExploreContent from "@/components/pages/extras/explore/content";
import CalculateContent from "@/components/pages/extras/calculate/content";
import LibraryContent from "@/components/pages/extras/library/content";
import NotesContent from "@/components/pages/extras/notes/content";
import FormularContent from "@/components/pages/extras/formular/content";
import CalendarContent from "@/components/pages/extras/calendar/content";
import LibraryContentSkeleton from "@/components/pages/extras/library/utils/BookSkeleton";
// import NotesContentSkeleton from "@/components/pages/extras/";
import NotesContentSkeleton from "@/components/pages/extras/notes/utils/NoteSkeleton";
import FormularContentSkeleton from "@/components/pages/extras/formular/utils/FormularSkeleton";
import CalculateContentSkeleton from "@/components/pages/extras/calculate/utils/CalculateSkeleton";
import NotFound from "../not-found";
import { useState } from "react";
import { useEffect } from "react";

interface HelpWrapperProps {
  currentTab: string;
}

export default function ExtraHelper({ currentTab }: HelpWrapperProps) {

    const [loading , setLoading] = useState(true);
    const [prevTab, setPrevTab] = useState(currentTab);

    useEffect(()=>{
         if (currentTab !== prevTab) {
            setLoading(true);

            const timer = setTimeout(() => {
              setLoading(false);
              setPrevTab(currentTab);
            }, 2500);

            return () => clearTimeout(timer);
        }else{
            setLoading(false);
        }
    },[currentTab, prevTab]);

    if(loading){
        switch(currentTab){
            case "library":
                return <LibraryContentSkeleton/>
            case "notes":
                return <NotesContentSkeleton/>
            case "calculate":
                return <CalculateContentSkeleton/>
            case "formular":
                return <FormularContentSkeleton/>
            default:
            return(
                <div className="p-10 text-center text-gray-400">
                    Loading...
                </div>
            );
        }
    }

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
"use client";

import BookCard from "./BookCard";
import BookSkeleton from "./BookSkeleton";

export default function BookContainer({books, loading}) {

    if(loading){
        return(
            <BookSkeleton count={8} />
        )
    }

    return(
        <div className="flex flex-col items-start gap-3">
            {/* Recommendatin */}
            {/* <h2 className="text-xl font-bold">Recommendation</h2> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((b) => (
                  <BookCard key={b.id} book={b} />
                ))}
            </div>
        </div>
    )
}
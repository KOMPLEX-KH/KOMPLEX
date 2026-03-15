"use client";
import { User } from "lucide-react";
import { Book } from "@core-types/api-types/books";
import Image from "next/image";

type Props = {
    book: Book;
    onClick?: (id: number) => void;
}

export default function BookCard({ book, onClick }: Props) {

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border-gray-200 dark:border-zinc-800 border-1 overflow-hidden cursor-pointer"
            onClick={() => onClick?.(book.id)}>

            <div className="w-full aspect-[9/13] overflow-hidden relative bg-gray-200 dark:bg-zinc-800">
                <Image
                    src={book.imageUrl}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-110 "
                    unoptimized
                />
            </div>

            <div className="p-4 space-y-2 dark:text-zinc-400">
                <h3 className="font-bold text-lg text-gray-900 dark:text-zinc-400">{book.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 dark:text-zinc-400 text-sm">
                    <User className="w-4 h-4 text-gray-500 dark:text-zinc-400" />
                    <span className="text-gray-600 dark:text-zinc-400 text-sm">{book.author}</span>
                </div>
            </div>
        </div>
    );
}

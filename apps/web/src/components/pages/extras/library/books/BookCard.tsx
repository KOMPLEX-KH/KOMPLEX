"use client";
import { User } from "lucide-react";

export default function BookCard({ book, onClick }) {
    return (
        <div className="bg-white rounded-xl border-gray-200 border-1 overflow-hidden cursor-pointer"
            onClick={()=> onClick && onClick(book.id)}>

            <div className="w-full h-48 overflow-hidden">
                <div className="w-full h-full bg-gray-300 transition-transform duration-300 ease-in-out hover:scale-110">
                </div>
            </div>

            <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg">{book.title}</h3>
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">{book.author}</span>
                </div>
            </div>
        </div>
    );
}

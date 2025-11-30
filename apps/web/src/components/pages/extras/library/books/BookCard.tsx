"use client";
import { User } from "lucide-react";

export default function BookCard({ book, onClick }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={()=> onClick && onClick(book.id)}>

            <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100"></div>

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

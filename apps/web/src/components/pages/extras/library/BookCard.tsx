"use client";


export default function BookCard({book}) {
    return(
        <div className="bg-white cursor-pointer rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-xl"></div>
            <div className="p-3 bg-amber-400">
                <h3 className="font-bold text-lg">{book.title}</h3>
                <p className="text-gray-600 text-sm bg-amber">{book.lesson}</p>
            </div>
        </div>
    )
}
import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
export default function Story({ img, username, isUser }) {
    return (
        <div className="relative cursor-pointer group">
            <img
                className="rounded-full h-14 p-[1.5px] border-red-500 border-2  group-hover:scale-110 transition-transform duration-200 ease-out"
                src={img}
                alt={username}
            ></img>
            {isUser && <PlusIcon className="absolute h-6 text-white top-4 left-4" />}
            <p className="text-xs truncate w-14">{username}</p>
        </div>
    );
}

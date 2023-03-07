import React from 'react';

export default function Story({ img, username }) {
    return (
        <div>
            <img
                className="rounded-full h-14 p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
                src={img}
                alt={username}
            ></img>
            <p className="text-xs truncate w-14">{username}</p>
        </div>
    );
}

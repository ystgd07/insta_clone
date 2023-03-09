import Image from 'next/image';
import React from 'react';

export default function MiniProfile() {
    return (
        <div className="flex items-center justify-between ml-10 mt-14 ">
            <Image
                src="https://pbs.twimg.com/profile_images/1591992476851503104/gHHIU14I_400x400.jpg"
                width={80}
                height={80}
                alt="user img"
                className="h-16 border rounded-full p-[2px]"
            ></Image>
            <div className="flex-1 ml-4">
                <h2 className="font-bold">yangsungsoo</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
            </div>
            <button className="text-sm font-semibold text-blue-400">Sign out</button>
        </div>
    );
}

'use client';
import Image from 'next/image';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
export default function MiniProfile() {
    const { data: session } = useSession();
    return (
        <div className="flex items-center justify-between ml-10 mt-14 ">
            <Image src={session?.user.image} width={80} height={80} alt="user img" className="h-16 border rounded-full p-[2px]"></Image>
            <div className="flex-1 ml-4">
                <h2 className="font-bold">{session?.user.username}</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
            </div>
            <button onClick={signOut} className="text-sm font-semibold text-blue-400">
                Sign out
            </button>
        </div>
    );
}

import Image from 'next/image';
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
    return (
        <div className="flex items-center justify-between max-w-6xl">
            <div className="relative hidden w-24 h-24 cursor-pointer lg:inline-grid">
                <Image
                    src="https://emilyannebondoc.files.wordpress.com/2014/09/instagram-header.png"
                    className="object-contain"
                    width={300}
                    height={300}
                ></Image>
            </div>
            <div className="relative w-10 h-24 cursor-pointer lg:hidden">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                    className="object-contain"
                    width={300}
                    height={300}
                ></Image>
                <div className="relative">
                    <div className="absolute top-2 left-2">
                        <MagnifyingGlassIcon className="h-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 text-sm border-gray-500 rounded-md bg-gray-50 focus:ring-black focus:border-black"
                    />
                </div>
                <h1>Right side</h1>
            </div>
        </div>
    );
}

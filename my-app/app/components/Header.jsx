import Image from 'next/image';
import React from 'react';

export default function Header() {
    return (
        <div>
            Header
            <div className="flex items-center justify-between max-w-6xl">
                <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                    <Image
                        src="https://emilyannebondoc.files.wordpress.com/2014/09/instagram-header.png"
                        className="object-contain"
                        width={300}
                        height={300}
                    ></Image>
                </div>
                <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                        className="object-contain"
                        width={300}
                        height={300}
                    ></Image>
                    <h1>Right side</h1>
                </div>
            </div>
        </div>
    );
}

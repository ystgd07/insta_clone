import Image from 'next/image';
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/solid';

export default function Header() {
    return (
        <div className="sticky top-0 z-30 bg-white border-b shadow-sm">
            <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
                {/* Left */}
                <div className="relative hidden w-24 h-24 cursor-pointer lg:inline-grid">
                    <Image
                        src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
                        layout="fill"
                        className="object-contain"
                    />
                </div>

                <div className="relative w-10 h-24 cursor-pointer lg:hidden">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
                        layout="fill"
                        className="object-contain"
                    />
                </div>

                {/* Middle */}

                <div className="relative mt-1">
                    <div className="absolute top-2 left-2">
                        <MagnifyingGlassIcon className="h-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 text-sm border-gray-500 rounded-md bg-gray-50 focus:ring-black focus:border-black"
                    />
                </div>

                {/* Right */}

                <div className="flex items-center space-x-4">
                    <HomeIcon className="hidden h-6 duration-200 ease-out cursor-pointer md:inline-flex hover:scale-125 transition-tranform" />

                    <>
                        <PlusCircleIcon className="h-6 duration-200 ease-out cursor-pointer hover:scale-125 transition-tranform" />
                        <img alt="user-image" className="h-10 rounded-full cursor-pointer" />
                    </>
                </div>
            </div>
        </div>
    );
}

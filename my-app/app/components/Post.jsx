'use client';
import React from 'react';
import { DocumentPlusIcon, HeartIcon, ChatBubbleLeftIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { useSession } from 'next-auth/react';
export default function Post({ img, userImg, caption, username, id }) {
    const { data: session } = useSession();
    console.log(username);
    return (
        <div className="bg-white border rounded-md my-7">
            <div className="flex items-center p-5">
                <Image
                    className="object-cover p-1 mr-3 border rounded-full cursor-pointer"
                    src={userImg}
                    alt={username}
                    width={100}
                    height={100}
                ></Image>
                <p className="flex-1 font-bold">{username}</p>
                <DocumentPlusIcon className="h-5" />
            </div>
            <Image className="object-cover w-full " src={img} alt="" width={280} height={280}></Image>
            {/* Image 태그에 object-fit:cover,fill 속성 제거해봄 
            추후에 주의해서 볼 것 */}

            {session && (
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        <HeartIcon className="btn" />
                        <ChatBubbleLeftIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>
            )}

            <p className="p-5 truncate">
                <span className="mr-5 font-bold">{username}</span>
                {caption}
            </p>
            {session && (
                <form className="flex items-center p-4">
                    <HiOutlineEmojiHappy className="h-7"></HiOutlineEmojiHappy>
                    <input type="text" placeholder="Enter your comment" className="flex-1 border-none focus:ring-0"></input>
                    <button className="font-bold text-blue-400 hover:text-amber-600">Post</button>
                </form>
            )}
        </div>
    );
}

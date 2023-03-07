import React from 'react';
import { DocumentPlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Post({ img, userImg, caption, username, id }) {
    console.log(username);
    return (
        <div className="bg-white border rounded-md my-7">
            <div className="flex items-center p-5">
                <Image className="object-cover p-1 mr-3 border rounded-full" src={userImg} alt={username} width={100} height={100}></Image>
                <p className="flex-1 font-bold">{username}</p>
                <DocumentPlusIcon className="h-5" />
            </div>
            <Image className="w-full " src={img} alt="" width={280} height={280}></Image>
            {/* Image 태그에 object-fit:cover,fill 속성 제거해봄 
            추후에 주의해서 볼 것 */}
        </div>
    );
}

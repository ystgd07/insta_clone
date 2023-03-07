'use client';
import minifaker from 'minifaker';
import { useEffect, useState } from 'react';
import 'minifaker/locales/en';
import Story from './Story';

export default function Stories() {
    const [storyU, setStoryU] = useState([]);
    useEffect(() => {
        const storyU = minifaker.array(20, (i) => ({
            username: minifaker.username({ locale: 'en' }),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i,
        }));
        setStoryU(storyU);
        console.log(storyU);
    }, []);
    return (
        <div className="flex p-6 mt-8 space-x-2 overflow-x-scroll bg-white border border-gray-200 rounded-sm scrollbar-none">
            {storyU.map((user) => (
                <Story key={user.id} username={user.username} img={user.img}></Story>
            ))}
        </div>
    );
}

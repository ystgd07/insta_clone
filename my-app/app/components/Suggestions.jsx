'use client';
import React, { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import Image from 'next/image';

export default function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = minifaker.array(5, (i) => ({
            username: minifaker.username({ locale: 'en' }).toLowerCase(),
            jobTitle: minifaker.jobTitle(),
            id: i,
        }));
        setSuggestions(suggestions);
    }, []);
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between mb-5 text-sm">
                <h3 className="font-bold text-gray-400">Suggestion for you</h3>
                <button className="font-semibold text-gray-600">See all</button>
            </div>
            {suggestions.map((e) => (
                <div className="flex items-center justify-between mt-3">
                    <img
                        className="h-10 rounded-full border p-[2px]"
                        src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`}
                        alt="suggestion img"
                    ></img>
                    <div className="flex-1 ml-4">
                        <h2 className="text-sm font-semibold">{e.username}</h2>
                        <h3 className="text-gray-400 truncate font-sm w-[230px]">{e.jobTitle}</h3>
                    </div>
                    <button className="ml-4 font-semibold text-blue-300 hover:text-amber-400">Follow</button>
                </div>
            ))}
        </div>
    );
}

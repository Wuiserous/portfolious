'use client'
import React from "react";
export default function Left( {postContent, onPostChange} ) {
  return (
    <div className="w-[30%] flex justify-center h-full bg-transparent border-r-[1px] border-gray-700">
        <div className="w-[100%] h-[30%] gap-2 p-2 border-b-[1px] border-gray-700 flex justify-center flex-col">
            <div className="w-[100%] h-[80%] border-b-[1px] border-gray-700">
                <textarea name="post" id="post" value={postContent} placeholder="what's in your mind.." onChange={(e) => onPostChange(e.target.value)} className="w-full h-full bg-transparent border-none p-2 text-white custom-textarea"></textarea>
            </div>
            <div className="w-[100%] h-[20%] bg-red-500 border-gray-700"></div>
        </div>
    </div>
  )
}
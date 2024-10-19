'use client';
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { FaPollH } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";

export default function Left() {
    const [content, setContent] = useState(""); // State for textarea content
    const handlePostCreation = async () => {
        if (content.trim()) {
          try {
            // Post the content to the backend API
            const res = await fetch('/api/posts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ content }),
            });
    
            if (!res.ok) throw new Error('Failed to create post');
    
            // Clear the textarea after successful post creation
            setContent("");
          } catch (error) {
            console.error("Error posting content:", error);
          }
        } else {
          alert("Post content cannot be empty");
        }
      };
  return (
    <div className="w-[30%] flex justify-center h-full bg-transparent border-r-[1px] border-gray-700">
        <div className="w-[100%] h-[30%] gap-2 p-2 border-b-[1px] border-gray-700 flex justify-center flex-col">
            <div className="w-[100%] h-[90%] border-b-[1px] border-gray-700">
                <textarea name="post" id="post" placeholder="what's in your mind..?"  className="w-full h-full bg-transparent border-none p-2 text-white custom-textarea"></textarea>
            </div>
            <div className="w-[100%] h-[10%] justify-between items-center  border-gray-700 flex flex-row">
                <div className="flex gap-2 w-fit h-fit">
                    <button><IoImageOutline size={25} /></button>
                    <button><MdOutlineGifBox size={25}  /></button>
                    <button><FaPollH size={25}  /></button>
                    <button><MdEmojiEmotions size={25}  /></button>
                </div>
                <div className="flex w-fit h-fit">
                    <button className="bg-orange-500 w-20 rounded-md">Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}
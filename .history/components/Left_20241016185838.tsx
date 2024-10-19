'use client';
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { FaPollH } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

export default function Left({ addPost }: { addPost: (post: any) => void }) {
    const [content, setContent] = useState("");

    const handleChange = (e: any) => {
        setContent(e.target.value);
    };

    const handlePostSubmit = async () => {
        try {
            const response = await axios.post('/api/posts', { content });
            if (response.status === 200) {
                addPost(response.data); // Trigger the parent state update
                setContent(""); // Clear the textarea after successful post
            }
        } catch (error) {
            console.error('Failed to post:', error);
        }
    };

    return (
        <div className="w-[30%] flex justify-center h-full bg-transparent border-r-[1px] border-gray-700">
            {/* Render your UI components like before */}
            <div className="w-[100%] h-[30%] gap-2 p-2 border-b-[1px] border-gray-700 flex justify-center flex-col">
                <textarea
                    value={content}
                    onChange={handleChange}
                    placeholder="what's in your mind..?"
                    className="w-full h-full bg-transparent p-2 text-white"
                ></textarea>
                <button onClick={handlePostSubmit} className="bg-orange-500 w-20 rounded-md">Post</button>
            </div>
        </div>
    );
}

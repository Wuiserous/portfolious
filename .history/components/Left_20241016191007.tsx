'use client';
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { FaPollH } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

export default function Left({addPost}: {addPost: (post: any) => void}) {
    const [content, setContent] = useState("");

    const handleChange = (e:any) => {
        setContent(e.target.value);
    }

    const handlePostSubmit = async () => {
        try {
            const response = await axios.post('/api/posts/createPost', { content });
            if (response.status === 200) {
                addPost(response.data); // Fetch posts after successfully creating the post
                setContent(""); // Clear the textarea after successful post
            }
        } catch (error) {
            console.error('Failed to post:', error);
        }
    }

    return (
        <div className="w-[30%] flex justify-center h-full bg-transparent border-r-[1px] border-gray-700">
            {/* Your UI code */}
            <textarea value={content} onChange={handleChange} name="post" id="post" placeholder="what's in your mind..?" />
            <button className="bg-orange-500 w-20 rounded-md" onClick={handlePostSubmit}>Post</button>
        </div>
    );
}

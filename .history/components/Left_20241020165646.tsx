'use client';
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { FaPollH } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import BurgerMenu from '@/components/BurgerMenu'
import { useState } from "react";
import axios from "axios";

interface Post {
    id: number;
    content: string;
    createdAt: string;
}Curly bracket hey

export default function Left({addPost}: {addPost: (post: Post) => void}) {
    const [content, setContent] = useState("");

    const handleChange = (e:any) => {
        setContent(e.target.value);
    }

    const handlePostSubmit = async () => {
        try {
            const response = await axios.post('/api/posts/createPost', { content });
            if (response.status === 200) {
                addPost(response.data); // Add the new post to the parent state
                setContent(""); // Clear the textarea after successful post
            }
        } catch (error) {
            console.error('Failed to post:', error);
        }
    }

  return (
    <div className="w-[30%] flex justify-center h-full bg-transparent">
        <BurgerMenu />
        <div className="w-[100%] h-[30%] gap-2 p-2 border-b-[1px] border-gray-700 flex justify-center flex-col">
            <div className="w-[100%] h-[90%] border-b-[1px] border-gray-700">
                <textarea value={content} onChange={handleChange} name="post" id="post" placeholder="what's in your mind..?" className="w-full h-full bg-transparent border-none p-2 text-white custom-textarea"></textarea>
            </div>
            <div className="w-[100%] h-[10%] justify-between items-center  border-gray-700 flex flex-row">
                <div className="flex gap-2 w-fit h-fit">
                    <button><IoImageOutline size={25} /></button>
                    <button><MdOutlineGifBox size={25}  /></button>
                    <button><FaPollH size={25}  /></button>
                    <button><MdEmojiEmotions size={25}  /></button>
                </div>
                <div className="flex w-fit h-fit">
                    <button className="bg-orange-500 w-20 rounded-[3px]" onClick={handlePostSubmit}>Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}
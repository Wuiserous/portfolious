'use client';

import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { FaPollH } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";

// Post Creation Component
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
    <div className="w-full md:w-[30%] flex justify-center h-full bg-transparent border-r border-gray-700">
      <div className="w-full h-[30%] gap-2 p-2 border-b border-gray-700 flex flex-col">
        <div className="w-full h-[90%] border-b border-gray-700">
          <textarea
            name="post"
            id="post"
            placeholder="What's on your mind..?"
            value={content} // Bind textarea to content state
            onChange={(e) => setContent(e.target.value)} // Handle input change
            className="w-full h-full bg-transparent border-none p-2 text-white custom-textarea resize-none"
          />
        </div>
        <div className="w-full h-[10%] flex justify-between items-center border-gray-700">
          {/* Button section */}
          <div className="flex gap-2 w-fit h-fit">
            {/* Add your buttons here */}
          </div>

          {/* Post button */}
          <div className="flex w-fit h-fit">
            <button
              className="bg-orange-500 text-white w-20 rounded-md p-2 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Post Content"
              onClick={handlePostCreation} // Call handlePostCreation when button is clicked
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
